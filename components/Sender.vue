<template>
  <div class="sender">
      <v-text-field placeholder="Escribí algo..." class="sender__text mr-2" outlined rounded hide-details />
      <v-btn fab rounded color="primary" class="sender__btn">
          <v-icon>
              mdi-send
          </v-icon>
      </v-btn>
  </div>
</template>

<script>
export default {
    name: 'Sender',
}
</script>

<style lang="scss" scoped>
    .sender{
        background: #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 1rem 0.5rem;
    }
</style>