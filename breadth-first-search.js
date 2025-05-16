/**
 * Use breadth first search on a graph to find if there's
 * a path between two nodes, and what the shortest path is.
 */
function breadthFirstSearch(graph, start, meetsRequirement) {
  // Add the first node's neighbours to the queue.
  const queue = [...graph[start]];

  // Keep a list of already searched nodes to prevent an infinite loop.
  const searched = new Set();

  // Run as long as there's nodes in the queue.
  while (queue.length) {
    // Grab the first node (FIFO).
    let node = queue.shift();

    if (!searched.has(node)) {
      // If it meets the requirement, return true.
      if (meetsRequirement(node)) {
        console.log(`${node} meets the requirement!`);
        return true;
      } else {
        // If it doesn't meet the requirement, add the node's neighbours to the queue.
        queue.push(...graph[node]);
        searched.add(node);
      }
    }
  }

  // None of the nodes met the requirement.
  return false;
}

function testFunction(node) {
  return node === "tom";
}

let graph = {};

graph["you"] = ["claire", "bob", "alice"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["tom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["tom"] = [];
graph["jonny"] = [];

const result = breadthFirstSearch(graph, "you", testFunction);
console.log(result);
