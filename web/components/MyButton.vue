<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  max-width: 150px;
  width: 100%;
  height: 40px;
	font-weight: 700;
  transition: all 0.3s;
	border-radius: 4px;
	border: 2px solid #0e83cd;
	background: transparent;
	letter-spacing: 1px;
  color: #0e83cd;
}

button:hover {
	background: #0e83cd;
	color: #fff;
}
</style>
