/* @ds-bundle: {"format":3,"namespace":"AppleStyleDesignSystem_456fbf","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/buttons/TextLink.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"OptionChip","sourcePath":"components/forms/OptionChip.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"GlobalNav","sourcePath":"components/navigation/GlobalNav.jsx"},{"name":"SubNav","sourcePath":"components/navigation/SubNav.jsx"},{"name":"Badge","sourcePath":"components/surfaces/Badge.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ProductTile","sourcePath":"components/surfaces/ProductTile.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"2c12f788438b","components/buttons/IconButton.jsx":"465e81445c6f","components/buttons/TextLink.jsx":"5d858db3807d","components/forms/Input.jsx":"1225f9a13b2a","components/forms/OptionChip.jsx":"3e91403e4d1f","components/navigation/Footer.jsx":"9be3970d63a6","components/navigation/GlobalNav.jsx":"3bf4bb463d67","components/navigation/SubNav.jsx":"32019826a7fa","components/surfaces/Badge.jsx":"b9dbc29bdbed","components/surfaces/Card.jsx":"81d956a10bf9","components/surfaces/ProductTile.jsx":"cc945301e58b","ui_kits/apple-com/Chrome.jsx":"869294b4908a","ui_kits/apple-com/HomeScreen.jsx":"1ac8474f9815","ui_kits/apple-com/ProductScreen.jsx":"daf4d2e076b2","ui_kits/apple-com/StoreScreen.jsx":"8e454f73a5e9","ui_kits/apple-com/icons.jsx":"c18cdf2d8c6a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AppleStyleDesignSystem_456fbf = window.AppleStyleDesignSystem_456fbf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the Apple action grammar.
 * Variants:
 *   primary    : Action Blue pill (the signature CTA)
 *   secondary  : ghost pill — transparent, blue text + 1px blue ring
 *   dark       : compact near-black utility rect (8px radius) — nav actions
 *   pearl      : near-white capsule (11px radius) with soft ring — card secondary
 *   storeHero  : larger primary pill, weight-300 label
 * Press state is always transform: scale(0.95). No hover color shift.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  as = "button",
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-xs)",
    border: "none",
    cursor: disabled ? "default" : "pointer",
    font: "var(--text-body)",
    letterSpacing: "var(--ls-body)",
    whiteSpace: "nowrap",
    textDecoration: "none",
    transition: "transform 0.18s ease, opacity 0.18s ease, background 0.18s ease",
    transform: "scale(1)",
    opacity: disabled ? 0.36 : 1,
    pointerEvents: disabled ? "none" : "auto"
  };
  const sizes = {
    sm: {
      padding: "8px 15px",
      font: "var(--text-button)",
      letterSpacing: "var(--ls-caption)"
    },
    md: {
      padding: "11px 22px"
    },
    lg: {
      padding: "14px 28px",
      font: "var(--text-button-large)",
      letterSpacing: "0"
    }
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--on-blue)",
      borderRadius: "var(--radius-pill)"
    },
    secondary: {
      background: "transparent",
      color: "var(--accent)",
      border: "1px solid var(--accent)",
      borderRadius: "var(--radius-pill)"
    },
    dark: {
      background: "var(--ink)",
      color: "var(--text-on-dark)",
      borderRadius: "var(--radius-sm)",
      font: "var(--text-button)",
      letterSpacing: "var(--ls-caption)",
      padding: "8px 15px"
    },
    pearl: {
      background: "var(--surface-ghost)",
      color: "var(--ink-muted-80)",
      border: "3px solid var(--divider-soft)",
      borderRadius: "var(--radius-md)",
      font: "var(--text-caption)",
      letterSpacing: "var(--ls-caption)",
      padding: "8px 14px"
    },
    storeHero: {
      background: "var(--accent)",
      color: "var(--on-blue)",
      borderRadius: "var(--radius-pill)",
      font: "var(--text-button-large)",
      letterSpacing: "0",
      padding: "14px 28px"
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(rest.style || {})
  };
  delete rest.style;
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "scale(0.95)";
  };
  const onUp = e => {
    e.currentTarget.style.transform = "scale(1)";
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseLeave: onUp
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — circular control chip that floats over photography.
 * 44x44, translucent gray base, ink glyph. Carousel / close / in-image controls.
 */
function IconButton({
  children,
  label,
  size = 44,
  disabled = false,
  ...rest
}) {
  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    padding: 0,
    border: "none",
    borderRadius: "var(--radius-full)",
    background: "rgba(210, 210, 215, 0.64)",
    color: "var(--ink)",
    cursor: disabled ? "default" : "pointer",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    transition: "transform 0.18s ease, background 0.18s ease",
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? "none" : "auto",
    ...(rest.style || {})
  };
  delete rest.style;
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "scale(0.92)";
  };
  const onUp = e => {
    e.currentTarget.style.transform = "scale(1)";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    style: style,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseLeave: onUp
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextLink — inline Action Blue link. Use `onDark` for the brighter Sky Link
 * Blue on dark tiles (Action Blue disappears against near-black).
 * Optional trailing chevron for the Apple "Learn more ›" affordance.
 */
function TextLink({
  children,
  onDark = false,
  chevron = false,
  as = "a",
  ...rest
}) {
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    color: onDark ? "var(--text-link-on-dark)" : "var(--text-link)",
    font: "var(--text-body)",
    letterSpacing: "var(--ls-body)",
    textDecoration: "none",
    cursor: "pointer",
    ...(rest.style || {})
  };
  delete rest.style;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style
  }, rest), children, chevron && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      transform: "translateY(-1px)"
    }
  }, "\u203A"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — neutral text field. Pill variant matches the accessories search
 * grammar; rect variant for standard forms. 1px alpha hairline border,
 * focus ring in Focus Blue. Optional leading glyph.
 */
function Input({
  shape = "pill",
  leading = null,
  disabled = false,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const wrap = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    width: "100%",
    height: 44,
    padding: shape === "pill" ? "0 20px" : "0 14px",
    background: "var(--surface-card)",
    border: `1px solid ${focused ? "var(--accent-focus)" : "var(--border-input)"}`,
    boxShadow: focused ? "0 0 0 3px rgba(0,113,227,0.18)" : "none",
    borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-sm)",
    transition: "border 0.15s ease, box-shadow 0.15s ease",
    opacity: disabled ? 0.5 : 1,
    boxSizing: "border-box"
  };
  const input = {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    font: "var(--text-body)",
    letterSpacing: "var(--ls-body)",
    color: "var(--text-primary)",
    minWidth: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({
    style: input,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OptionChip — configurator cell (iPhone buy page). Pill-shaped tappable
 * option with optional label + price delta. Selected state upgrades the
 * border to 2px Focus Blue. No fill change.
 */
function OptionChip({
  children,
  sub,
  selected = false,
  disabled = false,
  ...rest
}) {
  const style = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "2px",
    padding: "12px 16px",
    background: "var(--surface-card)",
    color: "var(--ink)",
    border: `${selected ? "2px" : "1px"} solid ${selected ? "var(--accent-focus)" : "var(--hairline)"}`,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "default" : "pointer",
    font: "var(--text-caption)",
    letterSpacing: "var(--ls-caption)",
    transition: "border 0.15s ease, transform 0.15s ease",
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? "none" : "auto",
    textAlign: "left",
    ...(rest.style || {})
  };
  delete rest.style;
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
  };
  const onUp = e => {
    e.currentTarget.style.transform = "scale(1)";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: style,
    "aria-pressed": selected,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseLeave: onUp
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, children), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, sub));
}
Object.assign(__ds_scope, { OptionChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionChip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Footer — parchment, dense link columns at the relaxed 2.41 leading that
 * makes the columns breathe. Caption-strong headings, a fine-print legal row
 * at the bottom in muted ink.
 */
function Footer({
  columns = [],
  legal,
  ...rest
}) {
  const root = {
    background: "var(--surface-alt)",
    color: "var(--ink-muted-80)",
    padding: "var(--space-xxl) 22px",
    ...(rest.style || {})
  };
  delete rest.style;
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: root
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "var(--space-xl)",
      maxWidth: "var(--content-grid)",
      margin: "0 auto"
    }
  }, columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-caption-strong)",
      letterSpacing: "var(--ls-caption)",
      marginBottom: "var(--space-xs)"
    }
  }, col.heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, col.links.map((l, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      lineHeight: "var(--lh-dense)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href || "#",
    style: {
      font: "var(--text-fine)",
      color: "var(--ink-muted-80)",
      textDecoration: "none"
    }
  }, l.label))))))), legal && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-grid)",
      margin: "var(--space-xl) auto 0",
      paddingTop: "var(--space-md)",
      borderTop: "1px solid var(--hairline)",
      font: "var(--text-fine)",
      color: "var(--text-muted)"
    }
  }, legal));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/GlobalNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlobalNav — the persistent ultra-thin black bar. 44px tall, true black,
 * 12px quiet nav links edge-to-edge, with a right-aligned utility cluster
 * (search / bag). `logo` is a slot — pass your own brand mark (this system
 * ships no Apple trademark).
 */
function GlobalNav({
  logo,
  links = [],
  actions,
  ...rest
}) {
  const bar = {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-lg)",
    height: "var(--nav-height)",
    padding: "0 22px",
    background: "var(--surface-nav)",
    color: "var(--text-on-dark)",
    ...(rest.style || {})
  };
  delete rest.style;
  const linkStyle = {
    font: "var(--text-nav)",
    letterSpacing: "var(--ls-micro)",
    color: "var(--text-on-dark)",
    opacity: 0.86,
    textDecoration: "none",
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: bar
  }, rest), logo && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      opacity: 0.9
    }
  }, logo), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-lg)",
      flex: 1
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href || "#",
    style: linkStyle
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)",
      alignItems: "center"
    }
  }, actions));
}
Object.assign(__ds_scope, { GlobalNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/GlobalNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SubNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SubNav — frosted-glass surface-specific bar that sticks below the global
 * nav. Parchment at 80% + backdrop blur. Left: category name (tagline type).
 * Right: inline utility links ending in a persistent primary CTA.
 */
function SubNav({
  category,
  links = [],
  cta,
  ...rest
}) {
  const bar = {
    display: "flex",
    alignItems: "center",
    height: "var(--subnav-height)",
    padding: "0 22px",
    background: "rgba(245,245,247,0.8)",
    backdropFilter: "var(--blur-frosted)",
    WebkitBackdropFilter: "var(--blur-frosted)",
    color: "var(--ink)",
    ...(rest.style || {})
  };
  delete rest.style;
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: bar
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-tagline)",
      letterSpacing: "var(--ls-tagline)",
      flex: 1
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-lg)"
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href || "#",
    style: {
      font: "var(--text-button)",
      letterSpacing: "var(--ls-caption)",
      color: "var(--ink)",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, l.label)), cta));
}
Object.assign(__ds_scope, { SubNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SubNav.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — quiet status / category pill. Tones: neutral (parchment),
 * accent (Action Blue), new (blue text on translucent). Caption type.
 * Never loud; Apple uses these sparingly (e.g. "New", "Trade In").
 */
function Badge({
  children,
  tone = "neutral",
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--parchment)",
      color: "var(--ink-muted-80)"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--on-blue)"
    },
    new: {
      background: "rgba(0,102,204,0.1)",
      color: "var(--accent)"
    }
  };
  const style = {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 10px",
    borderRadius: "var(--radius-pill)",
    font: "var(--text-caption-strong)",
    letterSpacing: "var(--ls-caption)",
    ...tones[tone],
    ...(rest.style || {})
  };
  delete rest.style;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Badge.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — store / accessories utility card. White, 1px hairline, 18px radius,
 * 24px padding. No shadow (the product image itself carries the system
 * product-shadow). Optional image slot, title, price, and CTA region.
 */
function Card({
  image,
  title,
  price,
  footer,
  children,
  ...rest
}) {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-sm)",
    background: "var(--surface-card)",
    border: "1px solid var(--border-card)",
    borderRadius: "var(--radius-lg)",
    padding: "var(--space-lg)",
    boxSizing: "border-box",
    ...(rest.style || {})
  };
  delete rest.style;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      aspectRatio: "1 / 1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-alt)"
    }
  }, image), title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-strong)",
      letterSpacing: "var(--ls-body)"
    }
  }, title), price && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body)",
      letterSpacing: "var(--ls-body)",
      color: "var(--text-primary)"
    }
  }, price), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xxs)"
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProductTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProductTile — the full-bleed hero section. Centered stack: headline →
 * tagline → CTA row → product image. Tones: light / parchment / dark.
 * Edge-to-edge, no rounding — the surface color change IS the divider.
 */
function ProductTile({
  tone = "light",
  eyebrow,
  title,
  tagline,
  actions,
  image,
  ...rest
}) {
  const tones = {
    light: {
      background: "var(--white)",
      color: "var(--ink)"
    },
    parchment: {
      background: "var(--parchment)",
      color: "var(--ink)"
    },
    dark: {
      background: "var(--tile-dark-1)",
      color: "var(--ink-on-dark)"
    }
  };
  const isDark = tone === "dark";
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "var(--space-section) var(--space-lg)",
    borderRadius: "var(--radius-none)",
    ...tones[tone],
    ...(rest.style || {})
  };
  delete rest.style;
  return /*#__PURE__*/React.createElement("section", _extends({
    style: style
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-tagline)",
      letterSpacing: "var(--ls-tagline)",
      color: isDark ? "var(--text-link-on-dark)" : "var(--text-link)",
      marginBottom: "var(--space-xs)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--text-display-lg)",
      letterSpacing: "var(--ls-display)",
      margin: 0
    }
  }, title), tagline && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-lead)",
      margin: "var(--space-sm) 0 0",
      color: isDark ? "var(--text-muted-dark)" : "var(--ink)",
      maxWidth: 720
    }
  }, tagline), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)",
      marginTop: "var(--space-lg)",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, actions), image && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xxl)",
      filter: "drop-shadow(var(--shadow-product))"
    }
  }, image));
}
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProductTile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/apple-com/Chrome.jsx
try { (() => {
/* Shared chrome — global nav + footer — composed from the DS bundle.
   Brand mark is a neutral placeholder ring (no Apple trademark). */

const DS_chrome = window.AppleStyleDesignSystem_456fbf;
function BrandMark() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 15,
      height: 15,
      borderRadius: "50%",
      background: "#fff",
      opacity: 0.92
    }
  });
}
function Chrome_GlobalNav({
  onNav,
  route
}) {
  const {
    GlobalNav
  } = DS_chrome;
  const links = [{
    label: "Store",
    key: "store"
  }, {
    label: "Mac"
  }, {
    label: "iPad"
  }, {
    label: "iPhone",
    key: "iphone"
  }, {
    label: "Watch"
  }, {
    label: "Support"
  }];
  return /*#__PURE__*/React.createElement(GlobalNav, {
    logo: /*#__PURE__*/React.createElement("span", {
      onClick: () => onNav("home"),
      style: {
        cursor: "pointer",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(BrandMark, null)),
    links: links.map(l => ({
      label: l.label,
      href: "#",
      onClick: l.key ? e => {
        e.preventDefault();
        onNav(l.key);
      } : undefined
    })),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        opacity: 0.85,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(SearchIcon, {
      size: 15
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        opacity: 0.85,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(BagIcon, {
      size: 15
    })))
  });
}

/* GlobalNav links don't forward onClick — wrap with our own row instead. */
function NavBar({
  onNav
}) {
  const items = [{
    label: "Store",
    key: "store"
  }, {
    label: "Mac"
  }, {
    label: "iPad"
  }, {
    label: "iPhone",
    key: "iphone"
  }, {
    label: "Watch"
  }, {
    label: "AirPods"
  }, {
    label: "Support"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      height: "var(--nav-height)",
      padding: "0 40px",
      background: "var(--surface-nav)",
      color: "var(--text-on-dark)",
      position: "sticky",
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onNav("home"),
    style: {
      cursor: "pointer",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(BrandMark, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      flex: 1
    }
  }, items.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: () => l.key && onNav(l.key),
    style: {
      font: "var(--text-nav)",
      letterSpacing: "var(--ls-micro)",
      opacity: 0.86,
      cursor: l.key ? "pointer" : "default"
    }
  }, l.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      opacity: 0.85,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(SearchIcon, {
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      opacity: 0.85,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(BagIcon, {
    size: 15
  })));
}
function SiteFooter() {
  const {
    Footer
  } = DS_chrome;
  return /*#__PURE__*/React.createElement(Footer, {
    columns: [{
      heading: "Shop and Learn",
      links: [{
        label: "Store"
      }, {
        label: "Mac"
      }, {
        label: "iPad"
      }, {
        label: "iPhone"
      }, {
        label: "Watch"
      }, {
        label: "Accessories"
      }]
    }, {
      heading: "Services",
      links: [{
        label: "Music"
      }, {
        label: "TV+"
      }, {
        label: "iCloud"
      }, {
        label: "One"
      }, {
        label: "Arcade"
      }]
    }, {
      heading: "Apple Store",
      links: [{
        label: "Find a Store"
      }, {
        label: "Genius Bar"
      }, {
        label: "Trade In"
      }, {
        label: "Financing"
      }]
    }, {
      heading: "About Apple",
      links: [{
        label: "Newsroom"
      }, {
        label: "Careers"
      }, {
        label: "Investors"
      }, {
        label: "Contact"
      }]
    }],
    legal: "Copyright \xA9 2026 \u2014 Apple-Style Design System demo. A recreation for design reference; not affiliated with Apple Inc."
  });
}
Object.assign(window, {
  NavBar,
  SiteFooter,
  BrandMark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/apple-com/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/apple-com/HomeScreen.jsx
try { (() => {
/* Home — full-bleed alternating product tiles, the core Apple page rhythm.
   Product renders are neutral gradient placeholders (no proprietary imagery). */

const DS_home = window.AppleStyleDesignSystem_456fbf;
function ProductRender({
  from,
  to,
  w = 360,
  h = 230,
  radius = 20,
  shadow = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      borderRadius: radius,
      background: `linear-gradient(150deg, ${from}, ${to})`,
      filter: shadow ? "drop-shadow(var(--shadow-product))" : "none"
    }
  });
}
function HomeScreen({
  onNav
}) {
  const {
    Button,
    TextLink
  } = DS_home;
  function Tile({
    tone,
    eyebrow,
    title,
    tagline,
    render,
    primary = "Buy",
    onPrimary
  }) {
    const tones = {
      light: {
        background: "var(--white)",
        color: "var(--ink)"
      },
      parchment: {
        background: "var(--parchment)",
        color: "var(--ink)"
      },
      dark: {
        background: "var(--tile-dark-1)",
        color: "var(--text-on-dark)"
      }
    };
    const isDark = tone === "dark";
    return /*#__PURE__*/React.createElement("section", {
      style: {
        ...tones[tone],
        padding: "72px 24px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, eyebrow && /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--text-tagline)",
        letterSpacing: "var(--ls-tagline)",
        color: isDark ? "var(--text-link-on-dark)" : "var(--text-link)",
        marginBottom: 6
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--text-hero-display)",
        letterSpacing: "var(--ls-hero)",
        margin: 0
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--text-lead)",
        margin: "10px 0 0",
        color: isDark ? "var(--text-muted-dark)" : "var(--ink)"
      }
    }, tagline), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 18,
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onPrimary
    }, primary), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Learn more")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 44
      }
    }, render));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tile, {
    tone: "dark",
    eyebrow: "New",
    title: "iPhone 17 Pro",
    tagline: "The most powerful iPhone ever.",
    onPrimary: () => onNav("iphone"),
    render: /*#__PURE__*/React.createElement(ProductRender, {
      from: "#3a3a3c",
      to: "#1d1d1f",
      w: 420,
      h: 250
    })
  }), /*#__PURE__*/React.createElement(Tile, {
    tone: "light",
    title: "MacBook Pro",
    tagline: "Mind-blowing. Head-turning.",
    render: /*#__PURE__*/React.createElement(ProductRender, {
      from: "#e8e8ec",
      to: "#b9b9c2",
      w: 460,
      h: 240
    })
  }), /*#__PURE__*/React.createElement(Tile, {
    tone: "parchment",
    title: "Apple Watch",
    tagline: "Smarter. Brighter. Mightier.",
    render: /*#__PURE__*/React.createElement(ProductRender, {
      from: "#f0d9c0",
      to: "#d8a47f",
      w: 300,
      h: 250,
      radius: 40
    })
  }), /*#__PURE__*/React.createElement(Tile, {
    tone: "dark",
    eyebrow: "Apple Intelligence",
    title: "Built for you.",
    tagline: "Personal, private, and right where you need it.",
    render: /*#__PURE__*/React.createElement(ProductRender, {
      from: "#2a2a2c",
      to: "#0a0a0a",
      w: 420,
      h: 230
    })
  }));
}
Object.assign(window, {
  HomeScreen,
  ProductRender
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/apple-com/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/apple-com/ProductScreen.jsx
try { (() => {
/* iPhone buy page — sub-nav, configurator (color + storage option chips),
   running price, and the frosted floating sticky bar. */

const DS_prod = window.AppleStyleDesignSystem_456fbf;
function ProductScreen({
  onNav,
  onAddToBag
}) {
  const {
    Button,
    OptionChip,
    SubNav
  } = DS_prod;
  const colors = [{
    id: "natural",
    label: "Natural Titanium",
    swatch: "#bcb6ad"
  }, {
    id: "blue",
    label: "Blue Titanium",
    swatch: "#3c4a5a"
  }, {
    id: "white",
    label: "White Titanium",
    swatch: "#e8e6e1"
  }, {
    id: "black",
    label: "Black Titanium",
    swatch: "#2a2a2c"
  }];
  const storage = [{
    id: "256",
    label: "256GB",
    price: "From $999",
    delta: 0
  }, {
    id: "512",
    label: "512GB",
    price: "+$200",
    delta: 200
  }, {
    id: "1tb",
    label: "1TB",
    price: "+$400",
    delta: 400
  }];
  const [color, setColor] = React.useState("natural");
  const [size, setSize] = React.useState("256");
  const base = 999;
  const total = base + (storage.find(s => s.id === size)?.delta || 0);
  const activeColor = colors.find(c => c.id === color);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: "var(--nav-height)",
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement(SubNav, {
    category: "iPhone 17 Pro",
    links: [{
      label: "Overview"
    }, {
      label: "Switch from Android"
    }, {
      label: "Tech Specs"
    }],
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Buy")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      padding: "48px 40px 0",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 130,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      height: 400,
      borderRadius: 44,
      background: `linear-gradient(150deg, ${activeColor.swatch}, ${shade(activeColor.swatch)})`,
      filter: "drop-shadow(var(--shadow-product))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-caption)",
      color: "var(--text-muted)",
      letterSpacing: "var(--ls-caption)"
    }
  }, activeColor.label)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-caption-strong)",
      color: "var(--accent)",
      letterSpacing: "var(--ls-caption)",
      marginBottom: 8
    }
  }, "New"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--text-hero-display)",
      letterSpacing: "var(--ls-hero)",
      margin: "0 0 6px"
    }
  }, "Buy iPhone 17 Pro"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-lead)",
      margin: "0 0 36px",
      color: "var(--ink)"
    }
  }, "From $", base, " or $41.62/mo. for 24 mo."), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--text-display-md)",
      letterSpacing: "var(--ls-display)",
      margin: "0 0 16px"
    }
  }, "Finish."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginBottom: 40
    }
  }, colors.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setColor(c.id),
    "aria-label": c.label,
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      cursor: "pointer",
      padding: 0,
      background: c.swatch,
      border: color === c.id ? "2px solid var(--accent-focus)" : "1px solid var(--hairline)",
      boxShadow: color === c.id ? "0 0 0 2px #fff inset" : "none",
      transition: "border 0.15s ease"
    }
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--text-display-md)",
      letterSpacing: "var(--ls-display)",
      margin: "0 0 16px"
    }
  }, "Storage."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12
    }
  }, storage.map(s => /*#__PURE__*/React.createElement(OptionChip, {
    key: s.id,
    sub: s.price,
    selected: size === s.id,
    onClick: () => setSize(s.id)
  }, s.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 60,
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      background: "rgba(245,245,247,0.82)",
      backdropFilter: "var(--blur-frosted)",
      WebkitBackdropFilter: "var(--blur-frosted)",
      boxShadow: "0 -0.5px 0 rgba(0,0,0,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body)",
      letterSpacing: "var(--ls-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "iPhone 17 Pro \xB7 ", activeColor.label, " \xB7 ", storage.find(s => s.id === size).label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      marginLeft: 14
    }
  }, "$", total.toLocaleString())), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onAddToBag(total)
  }, "Add to Bag")));
}
function shade(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, (n >> 16) - 26),
    g = Math.max(0, (n >> 8 & 255) - 26),
    b = Math.max(0, (n & 255) - 26);
  return `rgb(${r},${g},${b})`;
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/apple-com/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/apple-com/StoreScreen.jsx
try { (() => {
/* Store / accessories grid — search field + utility card grid. */

const DS_store = window.AppleStyleDesignSystem_456fbf;
function StoreScreen({
  onNav
}) {
  const {
    Card,
    Input,
    TextLink,
    Badge
  } = DS_store;
  const [q, setQ] = React.useState("");
  const products = [{
    id: 1,
    name: "iPhone 17 Pro",
    price: "From $999",
    from: "#3a3a3c",
    to: "#1d1d1f",
    tag: "New",
    nav: "iphone"
  }, {
    id: 2,
    name: "MacBook Air",
    price: "From $1099",
    from: "#e8e8ec",
    to: "#c2c2cb"
  }, {
    id: 3,
    name: "Apple Watch Series 11",
    price: "From $399",
    from: "#f0d9c0",
    to: "#d8a47f",
    tag: "New"
  }, {
    id: 4,
    name: "AirPods Pro 3",
    price: "$249",
    from: "#f5f5f7",
    to: "#d6d6dc"
  }, {
    id: 5,
    name: "iPad Pro",
    price: "From $999",
    from: "#d7dde3",
    to: "#aab4c0"
  }, {
    id: 6,
    name: "HomePod",
    price: "$299",
    from: "#2a2a2c",
    to: "#0e0e0e"
  }];
  const filtered = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  const Search = () => /*#__PURE__*/React.createElement(SearchIcon, {
    size: 16
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--parchment)",
      minHeight: "70vh",
      padding: "56px 40px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-grid)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 32,
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--text-hero-display)",
      letterSpacing: "var(--ls-hero)",
      margin: 0
    }
  }, "Store."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-lead)",
      margin: "8px 0 0",
      color: "var(--ink)"
    }
  }, "The best way to buy the products you love.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      maxWidth: "100%"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    shape: "pill",
    placeholder: "Search the store",
    leading: /*#__PURE__*/React.createElement(Search, null),
    value: q,
    onChange: e => setQ(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: 24
    }
  }, filtered.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    image: /*#__PURE__*/React.createElement("div", {
      style: {
        width: "76%",
        height: "76%",
        borderRadius: 10,
        background: `linear-gradient(150deg, ${p.from}, ${p.to})`
      }
    }),
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, p.name, p.tag && /*#__PURE__*/React.createElement(Badge, {
      tone: "new"
    }, p.tag)),
    price: p.price,
    footer: /*#__PURE__*/React.createElement(TextLink, {
      chevron: true,
      onClick: () => p.nav && onNav(p.nav)
    }, "Buy")
  }))), filtered.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-lead-airy)",
      color: "var(--text-muted)",
      textAlign: "center",
      marginTop: 60
    }
  }, "No results for \u201C", q, "\u201D.")));
}
Object.assign(window, {
  StoreScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/apple-com/StoreScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/apple-com/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Thin-stroke geometric glyphs approximating SF Symbols (Apple's native,
   web-unavailable icon set). Stroke 1.6–1.8 to match the light SF feel.
   Exported to window for use across the UI-kit screens. */

function Icon({
  children,
  size = 18,
  stroke = "currentColor",
  sw = 1.7,
  fill = "none",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: stroke,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), children);
}
const SearchIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("line", {
  x1: "21",
  y1: "21",
  x2: "16.65",
  y2: "16.65"
}));
const BagIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 10a4 4 0 0 1-8 0"
}));
const ChevronRight = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "9 18 15 12 9 6"
}));
const ChevronLeft = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "15 18 9 12 15 6"
}));
const ChevronDown = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "6 9 12 15 18 9"
}));
const Plus = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));
const Check = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}));
const Sparkle = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"
}));
Object.assign(window, {
  Icon,
  SearchIcon,
  BagIcon,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Plus,
  Check,
  Sparkle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/apple-com/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.OptionChip = __ds_scope.OptionChip;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.GlobalNav = __ds_scope.GlobalNav;

__ds_ns.SubNav = __ds_scope.SubNav;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProductTile = __ds_scope.ProductTile;

})();
