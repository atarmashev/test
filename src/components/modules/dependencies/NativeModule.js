// не особого синтаксиса экспорта для таких функций
window['sayHelloNative'] = () => {
    console.log('HeWo');
};
// для того, чтобы этот файл был включён в проект
export default '';