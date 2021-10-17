<template>
  <div class="main-chat">
    <message 
      v-for="(message, idx) in messages" 
      :key="idx"
      :user-name="message.user"
      :content="message.content"
      :is-current-user="message.currentUser"
      class="my-2"
    />
  </div>
</template>

<script>

export default{
  name: 'HomePage',
  data() {
    return {
      messages: [
        {
          user: 'Cristian',
          content: 'Hello!! Cómo va? asdfasdfasdfasdfasdfasdfa sdfasdfasdfasdfasdfasdfadfsa',
          currentUser: true,
        },
        {
          user: 'Franco',
          content: 'Estoy durmiendo, no jodas!',
          currentUser: false,
        },
        {
          user: 'Cristian',
          content: 'Hello!! Cómo va?',
          currentUser: true,
        },
        {
          user: 'Franco',
          content: 'Estoy durmiendo, no jodas!',
          currentUser: false,
        },
        {
          user: 'Cristian',
          content: 'Hello!! Cómo va?',
          currentUser: true,
        },
        {
          user: 'Franco',
          content: 'Estoy durmiendo, no jodas!',
          currentUser: false,
        },
        {
          user: 'Cristian',
          content: 'Hello!! Cómo va?',
          currentUser: true,
        },
        {
          user: 'Franco',
          content: 'Estoy durmiendo, no jodas!',
          currentUser: false,
        },
        {
          user: 'Cristian',
          content: 'Hello!! Cómo va?',
          currentUser: true,
        },
        {
          user: 'Franco',
          content: 'Estoy durmiendo, no jodas!',
          currentUser: false,
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .main-chat {
    width: 100vw;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
  }
</style>