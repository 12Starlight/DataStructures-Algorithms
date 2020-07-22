const treeHeight = (root) => {
    if (!root) return -1;

    // add 1 to include root
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}


module.exports = {
    treeHeight
};