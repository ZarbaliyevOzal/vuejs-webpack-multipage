import './styles.css';
import {createApp, Vue} from "vue";

import Swal from 'sweetalert2'

/* my components */
import Pagination from './components/Pagination.vue';
import Alert from './components/Alert.vue';
import PopupSelect from './components/PopupSelect.vue';
import SidebarSearch from './components/SidebarSearch.vue';
import MultiSelect from './components/MultiSelect.vue';
import Gallery from './components/Gallery.vue';
import Dropdown from './components/Dropdown.vue';
import DetailedSearch from './components/DetailedSearch.vue';
import NewAdvertisementForm from './components/NewAdvertisementForm.vue';
import LoginForm from './components/LoginForm.vue';
import RegisterForm from './components/RegisterForm.vue';
import ForgotPasswordForm from './components/ForgotPasswordForm.vue';
import ResetPasswordForm from './components/ResetPasswordForm.vue';
import MyAccountProfilePhoto from './components/MyAccountProfilePhoto.vue';
import ProfilePersonalInformationForm from './components/ProfilePersonalInformationForm.vue';
import ProfileChangePasswordForm from './components/ProfileChangePasswordForm.vue';
import EditAd from './components/EditAd.vue';
import ConfirmOwnershipForEditAd from './components/ConfirmOwnershipForEditAd.vue';
import ConfirmOwnershipForDeleteTheAd from './components/ConfirmOwnershipForDeleteTheAd.vue';


let app = createApp({
    data(){
        return {
            header_sidebar_menu: {
                is_open: false,
                collapse_menu: null
            },
        }
    },
    mounted(){
        // document.addEventListener('click', function($event){
        //     // close all dropdowns
        //     this.toggleDropdown($event);
        // })
    },
    // beforeUnmount(){
    //     document.removeEventListener('click');
    // },
    methods: {
        toggleHeaderSidebarMenu(){
            this.header_sidebar_menu.is_open = !this.header_sidebar_menu.is_open;
            if(this.header_sidebar_menu.is_open)
                this.$refs.hh.classList.replace('-right-2/3', 'right-0');
            else
                this.$refs.hh.classList.replace('right-0', '-right-2/3');
        },

        handleBackdropClick(){
            this.toggleHeaderSidebarMenu();
        },

        toggleHeaderSidebarCollapseMenu(index){
            this.header_sidebar_menu.collapse_menu = this.header_sidebar_menu.collapse_menu == index ? null : index;
        },

        // toggleDropdown(event){


        //     var el = event.target;
        //     var dropdown = event.target.parentElement;
        //     var dropdown_content = dropdown.childNodes[1];
        //     dropdown_content.classList.toggle('hidden');
        // }
    }
});
app.component('alert', Alert)
app.component('pagination', Pagination)
app.component('popup-select', PopupSelect)
app.component('dropdown', Dropdown)
app.component('detailed-search', DetailedSearch)
app.component('multiselect', MultiSelect)
app.component('sidebar-search', SidebarSearch)
app.component('gallery-carousel', Gallery)
app.component('new-advertisement-form', NewAdvertisementForm)
app.component('login-form', LoginForm)
app.component('register-form', RegisterForm)
app.component('forgot-password-form', ForgotPasswordForm)
app.component('reset-password-form', ResetPasswordForm)
app.component('my-account-profile-photo', MyAccountProfilePhoto)
app.component('profile-personal-information-form', ProfilePersonalInformationForm)
app.component('profile-change-password-form', ProfileChangePasswordForm)
app.component('edit-ad-form', EditAd)
app.component('confirm-ownership-for-edit-ad', ConfirmOwnershipForEditAd)
app.component('confirm-ownership-for-delete-the-ad', ConfirmOwnershipForDeleteTheAd)
const vm = app.mount('#app')