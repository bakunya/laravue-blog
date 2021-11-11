<template>
    <div>
        <button type="button" class="btn btn-danger mt-2 w-100" @click="showToast" data-bs-dismiss="toast" data-bs-target=".toast">Delete</button>

        <div class="toast position-fixed top-0 end-0" role="alert" aria-live="assertive" aria-atomic="true" ref="toast" style="z-index: 999;">
            <div class="toast-header">
                <div class="rounded me-2 bg-danger p-2" />
                <strong class="me-auto">Delete</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Are you sure to delete <strong>{{title}}</strong> article? You should use <strong>Unpublish</strong> or <strong>Publish</strong> action instead delete.
                <div class="mt-2 pt-2 border-top me-auto">
                    <button type="button" class="me-1 btn btn-danger btn-sm" @click="deleteArticle">Delete</button>
                    <button type="button" class="me-1 btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { computed, ref } from '@vue/reactivity'
    import * as bootstrap from '../../assets/js/bootstrap.min.js'
    export default {
        props: {
            id: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        },
        setup(props, { emit }) {
            const { title } = props
            const id = computed(() => `toast-${props.id}`)
            const target = computed(() => `toast-${props.id}`)
            const toast = ref(null)

            const showToast = () => {
                const allToast = document.querySelectorAll('.toast')
                allToast.forEach(elm => {
                    let instance = bootstrap.Toast.getInstance(elm)
                    instance?.hide()
                })

                const bs = new bootstrap.Toast(toast.value, { autohide: false })
                bs.show()
            }

            const deleteArticle = () => emit('action')

            return {
                id,
                target,
                showToast,
                ref,
                toast,
                title,
                deleteArticle
            }
        }
    }
</script>

<style>

</style>