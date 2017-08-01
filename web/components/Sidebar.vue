<template>
  <div class="sidebar">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
$sidebarSize: 300px;
$sidebarBreakpoint: 800px;

.sidebar {
  @media (max-width: $sidebarBreakpoint) {
    display: none;
  }

  position: fixed;
  left: 0;
  bottom: 0;
  height: calc(100% - 65px);
  width: $sidebarSize;
  overflow: auto;
  z-index: 999;
  border-right: 1px solid #ececec;
  padding: 28px 0px;

  a {
    padding-left: 48px;
    font-weight: 600;
    color: #666;
    text-decoration: none;
  }
}
</style>
