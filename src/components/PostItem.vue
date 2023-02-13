<template>
    <div class="post">
        <div>
        <div>{{ post.id }}</div>
        <div><strong>ФИО водителя: </strong> {{post.title}}</div> 
        <div><strong>Статус: </strong> {{post.body}}</div>
    </div> 
        <div class="post__btns">
            <my-button
            @click="$router.push(`/posts/${post.id}`)"
            >
                Подробнее...
            </my-button>
            <my-button
            @click="$emit('remove', post)"
            >
                Удалить... 
            </my-button>
         </div>
    </div>

</template>

<script>
   export default {
        props: {
            post: {
                type: Object,
                required:true,
            }
        }
    }
</script>

<style scoped>

</style>    