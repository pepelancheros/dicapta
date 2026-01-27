import { defineComponent, useSSRContext, resolveComponent, h } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { f as useRuntimeConfig } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const prefix = () => {
  const { public: { strapiBlocksRenderer } } = useRuntimeConfig();
  return strapiBlocksRenderer.blocksPrefix;
};
const getNodeText = (node) => {
  const lines = [];
  node.text.split("\n").forEach((line, index, array) => {
    lines.push(line);
    if (index !== array.length - 1) {
      lines.push(h("br"));
    }
  });
  return lines;
};
const textInlineNode = (node) => {
  const text = getNodeText(node);
  if (node.bold) return h(resolveComponent(`${prefix()}BoldInlineNode`), () => text);
  if (node.italic) return h(resolveComponent(`${prefix()}ItalicInlineNode`), () => text);
  if (node.underline) return h(resolveComponent(`${prefix()}UnderlineInlineNode`), () => text);
  if (node.strikethrough) return h(resolveComponent(`${prefix()}StrikethroughInlineNode`), () => text);
  if (node.code) return h(resolveComponent(`${prefix()}CodeInlineNode`), () => text);
  return text;
};
const linkInlineNode = (node) => {
  const linkComponent = resolveComponent(`${prefix()}LinkInlineNode`);
  return h(linkComponent, { url: node.url }, () => node.children.map((childNode) => {
    return textInlineNode(childNode);
  }));
};
const defaultInlineNode = (node) => {
  if (node.type === "link") {
    return linkInlineNode(node);
  } else if (node.type === "text") {
    return textInlineNode(node);
  }
};
const listItemInlineNode = (node) => {
  const listItemComponent = resolveComponent(`${prefix()}ListItemInlineNode`);
  return h(listItemComponent, () => node.children.map(
    (childNode) => defaultInlineNode(childNode)
  ));
};
const headingBlockNode = (node) => {
  const headingComponent = resolveComponent(`${prefix()}Heading${node.level}Node`);
  return h(headingComponent, () => node.children.map(
    (childNode) => defaultInlineNode(childNode)
  ));
};
const paragraphBlockNode = (node) => {
  const paragraphComponent = resolveComponent(`${prefix()}ParagraphNode`);
  return h(paragraphComponent, () => node.children.map(
    (childNode) => defaultInlineNode(childNode)
  ));
};
const codeBlockNode = (node) => {
  const codeComponent = resolveComponent(`${prefix()}CodeNode`);
  return h(codeComponent, () => node.children.map(
    (childNode) => textInlineNode(childNode)
  ));
};
const quoteBlockNode = (node) => {
  const quoteComponent = resolveComponent(`${prefix()}QuoteNode`);
  return h(quoteComponent, () => node.children.map(
    (childNode) => defaultInlineNode(childNode)
  ));
};
const listBlockNode = (node) => {
  const listType = node.format === "ordered" ? "OrderedListNode" : "UnorderedListNode";
  const listComponent = resolveComponent(prefix() + listType);
  return h(listComponent, () => node.children.map(
    (childNode) => {
      if (childNode.type === "list-item") {
        return listItemInlineNode(childNode);
      }
      return listBlockNode(childNode);
    }
  ));
};
const imageBlockNode = (node) => {
  const imageComponent = resolveComponent(`${prefix()}ImageNode`);
  return h(imageComponent, {
    image: node.image
  });
};
const renderBlocks = (blockNodes) => {
  return blockNodes.map((blockNode) => {
    switch (blockNode.type) {
      case "heading":
        return headingBlockNode(blockNode);
      case "code":
        return codeBlockNode(blockNode);
      case "list":
        return listBlockNode(blockNode);
      case "quote":
        return quoteBlockNode(blockNode);
      case "image":
        return imageBlockNode(blockNode);
      default:
        return paragraphBlockNode(blockNode);
    }
  });
};
const useBlocksText = (blockNodes) => {
  const textNodes = renderBlocks(blockNodes);
  return {
    text: textNodes
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StrapiBlocksText",
  __ssrInlineRender: true,
  props: {
    nodes: {}
  },
  setup(__props) {
    const props = __props;
    const { text } = useBlocksText(props.nodes);
    const RenderText = () => {
      return text;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(RenderText, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-strapi-blocks-renderer/dist/runtime/components/StrapiBlocksText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=StrapiBlocksText-DOXrB8uK.mjs.map
