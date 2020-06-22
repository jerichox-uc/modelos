import { mount } from "@vue/test-utils";
import { expect } from "chai";
import Register from "@/components/Register.vue";


describe ('Register.vue' , () => {
    
        // Given (dado que existe...)
        const wrapper = mount(Register)
        let checkbox = wrapper.find('input[type="checkbox"]')
        let registerBtn = wrapper.find('button[type="submit"]')
// When(cuando pasa cierta cosa o evento)
        checkbox.setChecked(false)
        // Then (entonces, pasa cierta otra cosa)
        expect(registerBtn.classes('is-disabled')).to.be.true
    
    it ('has a button not disabled when checkbox is checked',()=>{
        checkbox.setChecked(true)
        expect(registerBtn.classes('is-disabled')).to.be.false
    })
    it('register a User', () => {
        //cargar componente con metodos de prueba
        let isSent = false 
        function stubMethod(){ isSent = true}
        const wrapper = mount(Register,{
            methods:{
                submitForm: stubMethod
            }
          })
        //1 encontrar los campos necesarios
        let userName = wrapper.find('input[type="text"]')
        let email = wrapper.find('input[type="email"]')
        let password = wrapper.find('input[type="password"]')
        let registerBtn = wrapper.find('button[type="submit"]')
        //2 asignar los valores a los campos
        userName.setValue('Baltazar Bratt')
        email.setValue('bbratt@hollywood.com')
        password.setValue('DanceFight')
        //3 enviar formulario
        registerBtn.trigger('click')
        //4 probar que se envio el registro
        expect(isSent).to.be.true
    } )
    
}) 