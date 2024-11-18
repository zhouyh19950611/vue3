export default function(){
    let num = ref(0);
    function add() {
        num.value++;
    }
    return {num,add}
}