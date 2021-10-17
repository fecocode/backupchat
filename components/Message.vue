<template>
  <div class="wrapper" :class="{ 'current-user': isCurrentUser }">
    <div class="message" :class="{ 'current-user': isCurrentUser }">
        <span>{{userName}}</span>
        <p>
          {{content}}
        </p>
    </div>
  </div>
</template>

<script>
    
export default {
    name:'Message',
    props:{
      content:{
        type: String,
        default:'',
      },
      isCurrentUser: {
        type: Boolean,
        default: false,
      },
      userName: {
        type: String,
        default: '',
      },
    }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: left;
    &.current-user {
      justify-content: right;
    }
  }
  .message{
    background-color: rgb(99, 99, 190);
    padding: 0.5rem;
    border-radius: 0.5rem;
    max-width: 75%;
    span {
      font-size: 0.8rem;
    }
    &.current-user {
      background-color: rgb(56, 56, 182);
      border: 1px solid rgb(24, 24, 95);
      span {
        font-weight: bold;
      }
    }
    p {
      max-width: 100%;
    }
  }
</style>