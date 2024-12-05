# Title (h1)

## Subtitle (h2)

### Sub-subtitle (h3)

#### Sub-sub-subtitle (h4)

##### Sub-sub-sub-subtitle (h5)

###### Sub-sub-sub-sub-subtitle (h6)

*To show anchor(default h1 and h2), uncomment line 162-165 of `.vitepress/theme/style.css`*

Line

- List 1
  - Sublist
    - Sub-sublist
- List 2

`This is a code`

```txt
This is a codeblock
```

```js
function codeblock() {
  return 'with highlight';
}
```

> This is a blockquote

::: tip
This is a tip
:::

::: info
This is an info
:::

::: warning
This is a warning
:::

::: danger
This is a danger
:::


Although vitepress supports codegroup, it is not recommended to use it cause the code won't be displayed when printing.

Mermaid:

```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```

**Print in light mode!!!**