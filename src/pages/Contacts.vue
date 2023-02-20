<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "Contacts",
  data() {
    return {
      loading: false,
      submitResult: "",
      form: {
        title: "",
        email: "",
        message: "",
        attachment: "",
      },
    };
  },
  methods: {
    onFormSubmit() {
      this.loading = true;
      // chiamata axios ad una rotta del server alla quale inviamo i dati del form
      // siccome dobbiamo inviare un file, occorre convertire l'oggetto form in un oggetto FormData
      const formData = new FormData();
      formData.append("title", this.form.title);
      formData.append("email", this.form.email);
      formData.append("message", this.form.message);
      formData.append("attachment", this.form.attachment);
      // post(url, dati) - i dati devono essere un oggetto js.
      axios
        .post(store.backendUrl + "/api/contacts", formData)
        .then((resp) => {
          // in caso di success, salvo una variable e imposto loading a false
          this.submitResult = "success";
          this.loading = false;
        })
        .catch((e) => {
          // controllo che nell'errore ci sia il response.data. 
          // Non è detto che c'è sempre. Dipende dall'errore.
          if (e.response && e.response.data) {
            this.submitResult = e.response.data.message;
          } else {
            this.submitResult = e.message;
          }
          console.log(e);
          this.loading = false;
        });
    },
    onAttachmentChange(event) {
      // reucupero l'array dei file scelti dall'utente
      const chosenFiles = event.target.files
      console.log(chosenFiles);
      // salvo il file scelto dentro l'oggetto form
      this.form.attachment = chosenFiles[0];
    }
  },
};
</script>

<template>
  <section class="contacts d-flex flex-column ">
    <div class="container flex-fill">
      <h1 class="mt-3">Pagina Contatti</h1>

      <div class="alert alert-success" v-if="submitResult === 'success'">
        Messaggio inviato correttamente. Ti risponderemo il prima possibile
      </div>

      <div class="alert alert-danger" v-else-if="submitResult">
        Sembra ci sia stato un errore. Ti invitiamo a riprovare pià tardi.<br />
        {{ submitResult }}
      </div>

      <form @submit.prevent="onFormSubmit" v-if="submitResult !== 'success'">
        <div class="mb-3">
          <label for="titleInput" class="form-label">Titolo</label>
          <input type="text" class="form-control" id="titleInput" v-model="form.title" />
        </div>

        <div class="mb-3">
          <label for="emailInput" class="form-label">Email</label>
          <input type="email" class="form-control" id="emailInput" v-model="form.email" />
        </div>

        <div class="mb-3">
          <label for="messageInput" class="form-label">Messaggio</label>
          <textarea class="form-control" id="messageInput" v-model="form.message"></textarea>
        </div>

        <div class="mb-3">
          <label for="attachmentInput" class="form-label">Allegato</label>
          <input type="file" class="form-control" id="attachmentInput" @change="onAttachmentChange" />
        </div>

        <div class="d-flex justify-content-center gap-3">
          <button class="btn btn-secondary" typeof="reset" :disabled="loading">
            Annulla
          </button>
          <button class="btn btn-success" :disabled="loading">
            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Invia
          </button>
        </div>
      </form>

      <!-- <a href="mailto:pippo@gmail.com?subject=testo di prova&body=messaggio predefinito">email</a>
      <a href="tel:3333333333">telefono</a> -->
    </div>
  </section>
</template>

<style scoped lang="scss">

  .contacts{
    height: calc(100vh - 177.77px);
    background: linear-gradient(to bottom, #ffffff, #b2ebf2, #03a9f4);
   
  }

</style>