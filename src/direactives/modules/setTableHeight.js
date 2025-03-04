export default {
    // bind(el,binding){
    //     console.log('el',el)
    //     console.log('el',el)

    // },
    inserted(el, binding, vnode){
        console.log('el',el)
        console.log('binding',binding)
        console.log('vnode',vnode)

        el.style.height = vnode.context.$refs.table.$el.offsetHeight + 'px'
    }
   
}