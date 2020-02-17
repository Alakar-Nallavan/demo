<template>
    <section>
        <b-field label="Notification Type">
              <div class="block">
                <b-radio
                  v-model="push_notify.type"
                  name="name"
                  native-value="1"
                  @input="NotiFicationType('1')"
                >Text</b-radio>
                <b-radio
                  v-model="push_notify.type"
                  name="name"
                  native-value="0"
                  @input="NotiFicationType('0')"
                >Image</b-radio>
              </div>
            </b-field>
        <b-field label="title" :label-position="labelPosition">
              <b-input
                name="title"
                v-model="push_notify.title"
                id="title"
                v-validate="'required'"
                placeholder="Enter your title here..."
                :disabled="isLoading"
              ></b-input>
        </b-field>

        

        

        

        <b-field label="description"
            :label-position="labelPosition">
<b-input
                maxlength="200"
                type="textarea"
                v-model="push_notify.description"
                name="description"
                id="description"
                v-validate="'required'"
                placeholder="Enter your content here..."
                :disabled="isLoading"
              ></b-input>      
                </b-field>

        <hr>

        
    </section>
</template>

<script>
export default {
    data() {
        return {
            labelPosition: 'on-border'
        }
    }
}
</script>

