const treeSum = (root) => {
    if (!root) return 0;
    let sum = 0;
    let queue = [root];

    while (queue.length) {
        let node = queue.shift();

        sum += node.val;

        // remember to visit left first
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return sum;
}

const treeSumRec = (root) => {
    if (!root) return 0;

    return treeSumRec(root.left) + root.val + treeSumRec(root.right);
}



module.exports = {
    treeSum,
    treeSumRec
};