import setTableHeight from './modules/setTableHeight'
const direactives = {
    setTableHeight
}
export default {
    install(app) {
        console.log('vue实例',app)
        console.log('direactives',direactives)
        Object.keys(direactives).forEach(key => {
            app.directive(key, direactives[key])
        })
    }
}