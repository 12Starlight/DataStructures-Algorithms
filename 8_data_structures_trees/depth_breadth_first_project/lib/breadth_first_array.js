const breadthFirstArray = (root) => {
    let visted = [];
    let queue = [root];

    while (queue.length) {
        let node = queue.shift();

        visted.push(node.val);

        // remember to visit left first
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return visted;
}

module.exports = {
    breadthFirstArray
};