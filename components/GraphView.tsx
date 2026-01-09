
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { GraphData, AINode, NodeCategory } from '../types';
import { CATEGORY_COLORS } from '../constants';

interface GraphViewProps {
  data: GraphData;
  onNodeClick: (node: AINode) => void;
  selectedNodeId: string | null;
}

const GraphView: React.FC<GraphViewProps> = ({ data, onNodeClick, selectedNodeId }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height]);

    svg.selectAll('*').remove();

    const g = svg.append('g');

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.2, 5])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Simulation Config
    const simulation = d3.forceSimulation<any>(data.nodes)
      .force('link', d3.forceLink<any, any>(data.links).id(d => d.id).distance(d => {
        const source = d.source as AINode;
        return source.level === 0 ? 300 : 180;
      }))
      .force('charge', d3.forceManyBody().strength(d => d.level === 0 ? -2500 : -1200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(d => (d as AINode).level === 0 ? 100 : 60));

    // Links with subtle gradient/flow look
    const link = g.append('g')
      .selectAll('line')
      .data(data.links)
      .join('line')
      .attr('stroke', '#1e293b')
      .attr('stroke-opacity', 0.8)
      .attr('stroke-width', d => {
        const sourceNode = data.nodes.find(n => n.id === (d.source as any).id || n.id === d.source);
        return sourceNode?.level === 0 ? 4 : 2;
      });

    // Nodes container
    const node = g.append('g')
      .selectAll('g')
      .data(data.nodes)
      .join('g')
      .attr('class', 'cursor-pointer')
      .on('click', (event, d) => {
        onNodeClick(d as AINode);
        // Smoothly center on click
        svg.transition().duration(750).call(
          zoom.transform,
          d3.zoomIdentity.translate(width / 2, height / 2).scale(1.2).translate(-(d as any).x, -(d as any).y)
        );
      })
      .call(d3.drag<any, any>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    // Glow filters
    const defs = svg.append('defs');
    const filter = defs.append('filter')
      .attr('id', 'nodeGlow')
      .attr('x', '-100%')
      .attr('y', '-100%')
      .attr('width', '300%')
      .attr('height', '300%');
    
    filter.append('feGaussianBlur')
      .attr('stdDeviation', '6')
      .attr('result', 'blur');
    filter.append('feComposite')
      .attr('in', 'SourceGraphic')
      .attr('in2', 'blur')
      .attr('operator', 'over');

    // Node Circles
    node.append('circle')
      .attr('r', d => {
        const n = d as AINode;
        if (n.level === 0) return 45;
        if (n.level === 1) return 25;
        return 15;
      })
      .attr('fill', d => CATEGORY_COLORS[(d as AINode).category])
      .attr('stroke', d => d.id === selectedNodeId ? '#fff' : 'transparent')
      .attr('stroke-width', 4)
      .attr('filter', 'url(#nodeGlow)')
      .attr('opacity', d => {
        if (!selectedNodeId) return 1;
        // Simple logic to dim non-connected nodes when one is selected
        const isRelated = d.id === selectedNodeId || (d as AINode).parent === selectedNodeId || (selectedNodeId === (d as AINode).parent);
        return isRelated ? 1 : 0.3;
      });

    // Labels
    node.append('text')
      .text(d => (d as AINode).label)
      .attr('dy', d => {
        const n = d as AINode;
        if (n.level === 0) return 65;
        if (n.level === 1) return 45;
        return 35;
      })
      .attr('text-anchor', 'middle')
      .attr('fill', '#f1f5f9')
      .attr('font-size', d => (d as AINode).level === 0 ? '18px' : '13px')
      .attr('font-weight', d => (d as AINode).level === 0 ? '800' : '600')
      .attr('class', 'pointer-events-none select-none drop-shadow-lg');

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Centering the graph initially
    svg.transition().duration(1000).call(zoom.transform, d3.zoomIdentity.translate(0,0).scale(0.8));

    return () => {
      simulation.stop();
    };
  }, [data, onNodeClick, selectedNodeId]);

  return <svg ref={svgRef} className="w-full h-full bg-[#020617]" />;
};

export default GraphView;
