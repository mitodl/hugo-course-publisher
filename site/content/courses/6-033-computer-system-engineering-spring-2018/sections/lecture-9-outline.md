---
title: Lecture 9 Outline
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: lecture-9-outline
    weight: 260
---
1.  Introduction
    *   Today: Link-state and distance-vector routing.
    *   Neither of these routing protocols is used to route across the entire Internet; let's find out why.
2.  Routing Protocols in General
    *   Goal: For every node X, after the routing protocol is run, X's routing table should contain a \*minimum-cost route\* to every other reachable node.
    *   Route vs. path:
        *   Path = Full path packets will travel.
        *   Route = First hop of that path. Node really only needs to know the first hop.
    *   Link costs:
        *   Link costs can represent many things: Delay, congestion, etc. Sometimes all link costs are just 1, so that the min-cost paths are the paths with the fewest hops.
        *   Link costs can change.
    *   Once a routing table is set up, when a switch gets a packet, it can check the packet header for the destination address, look that address up in its routing table, and add the packet to the queue for that outgoing link.
3.  Distributed Routing Protocols
    *   Scale better than centralized ones.
    *   Three steps:
        *   Nodes learn about their neighbors via the HELLO protocol.
        *   Nodes learn about other reachable nodes via advertisements.
        *   Nodes determine minimum-cost routes.
    *   All of these steps happen periodically, which lets routing protocols adapt as link costs change, as advertisements get lost, as links fail, as nodes fail, etc.
        *   HELLO protocol lets nodes discover link/node failures.
4.  Link-state Routing
    
    *   Main idea: Through advertisements, nodes disseminate information about the topology of the graph to all other nodes. Once all nodes have that information, they can run a shortest-path algorithm.
    *   Advertisement format: Each node's advertisement is a list of its neighbors and its link costs to those neighbors.
    *   Each node sends advertisements to their neighbors, who forward to their neighbors, who forward to their neighbors, ... I.e., advertisements are flooded.
    *   After flooding, each node should have a complete map of the network (except in the case of very specific, very rare sequences of advertisement loss). Nodes use this map to run Dijkstra's shortest path algorithm.
        *   Here's one way to do Dijkstra's algorithm, slightly different from the example I did in class (below, we assume that all nodes are initially known; you can make this a nodes-need-tobe-discovered based implementation with a few small changes).
        *   In each step of Dijkstra's algorithm, we keep track of W, the set of nodes we haven't processed yet. Initially, W is all nodes in the network.
        *   We also keep track of the current costs and routes to all of the nodes. Initially:
            
            routing\_table \[self\] = Self; routing\_table \[anyone else\] = ?  
            cost\_table \[self\] = 0; cost\_table \[anyone else\] = infinity
            
        
        While W is not empty:
        
        *   u = the node in W we have the minimum cost to so far
        *   Remove u from W
        *   For every neighbor v of u:  
            `d = cost_table [u] + cost (u, v)  
            if d < cost_table [v]  
              cost_table [v] = d  
              routing_table [v] = routing_table [u]`
        
    
    *   Good things: Flooding makes link-state extremely robust to failure. Very unlikely that a node will miss so many advertisements that it has an incorrect view of the network.
    *   Bad thing: Overhead of flooding is overwhelming. N nodes, L links => ~2NL advertisements total.
5.  Distance-vector Routing
    *   In link-state, nodes calculate full shortest paths. They really only need the route (first-hop) to a destination. Let's exploit that.
    *   Advertisement format: Each node's advertisement is a list of all the nodes it knows about, and its current costs to those nodes. Initially, this advertisement is just \[(self, 0)\].
    *   Nodes who receive an advertisement: Node X's advertisement will be received only by its neighbors.
    *   Integrate step: When node X receives an advertisement from its neighbor Y, this advertisement will be a list of \[(dst, cost)\] pairs. Each cost represents Y's cost to dst.
    
    For each (dst, cost) in the advertisement, X needs to check for two things:
    
    *   If X is already using Y to get to dst, update the cost information (remember, costs can change!).
    *   If X is not already using Y to get to dst, see if Y could provide a better path; if so, update the routing and cost information.
    
    *   Good thing: Overhead is much better. N nodes, L links => 2L advertisements, not 2NL as in link-state.
    *   Bad thing: Counting to INFINITY
        *   When a node A has no route to destination B, it will advertise a cost of INFINITY to B. A cost of INFINITY B is interpreted as there being no route to B. So INFINITY must be larger than the longest path in the network.
            *   But because the order in which advertisements are sent matters, sometimes nodes can incorrectly think there's a route when there isn't one. This can last for up to INFINITY steps ([see Lecture 9 slides (PDF)](https://open-learning-course-data.s3.amazonaws.com/6-033-computer-system-engineering-spring-2018/167d8ab5b4e6d60f276775bf678cd76c_MIT6_033S18lec9.pdf))
            *   Ironically, INFINITY is typically around 16 or 32.
6.  Summary
    *   Link-state routing: Nice, easy to reason about failures, but overhead prevents it from scaling. In practice, good for MIT-sized networks.
    *   Distance-vector routing: Significantly less overhead, but harder to reason about failures. In practice, good for very small networks (where we can reason about properties of routing loops)
    *   As of right now, we can route data within MIT (via link-state), but not outside of MIT.