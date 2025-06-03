import {withMermaid} from "vitepress-plugin-mermaid";
import mathjax3 from "markdown-it-mathjax3";

const customElements = ['mjx-container'];

// https://vitepress.dev/reference/site-config
export default withMermaid({
    title: "Markdown",
    description: "Renderer",
    markdown: {
        config: (md) => {
            md.use(mathjax3);
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag),
            },
        },
    },
    titleTemplate: false,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
    }
})
