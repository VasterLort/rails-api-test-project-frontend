<template>
    <div>
        <h3>Posts</h3>
        <div class="legend">
            <span>Double click to mark as complete.</span>
        </div>
        <div class="posts">
            <div
                @dblclick="onDoubleClick(post)"
                v-for="post in allPosts"
                :key="post.id"
                class="post">
                {{ post.title }}
                <button class="button  is-success" @click="deletePost(post.id)">Delete Post</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "PostIndex",
    methods: {
        ...mapActions([
            'fetchPosts',
            'deletePost',
            'updatePost'
        ]),
        onDoubleClick(currentPost) {
            const updatedPost = {
                id: currentPost.id,
                title: currentPost.title,
                description: currentPost.description
            }
            this.updatePost(updatedPost);
        }
    },
    computed: {
        ...mapGetters([
            'allPosts',
        ])
    },
    created() {
        this.fetchPosts();
    }
};
</script>

<style scoped>
    .posts {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
    .post {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
    i {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
        cursor: pointer;
    }
    .legend {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }
    @media (max-width: 500px) {
        .posts {
            grid-template-columns: 1fr;
        }
    }
</style>