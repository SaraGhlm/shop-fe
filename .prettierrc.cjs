module.exports = {
    plugins: ["@trivago/prettier-plugin-sort-imports"],
    importOrder: [
        "^react",
        "<THIRD_PARTY_MODULES>",
        "^[./]",
    ],
    importOderSeparation: true,
    importOrderSortSpecifiers: true,
    overrides: [{files: ["*.ts"], options: {parser: "babel-ts"}}],
}