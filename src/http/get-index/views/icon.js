export default function Icon(props = {}) {
  return `
<svg
  class="${props.class}"
  style="${props.style}"
>
  <use xlink:href="#${props.href}"></use>
</svg>
  `
}