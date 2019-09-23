<template>
  <div class="contacts">
    <h3>Contacts</h3>
    <Input labelText="Name" />
    <TextArea labelText="Message" />
    <Button>Send</Button>
  </div>
</template>

<script>
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
export default {
  name: "ContactsView",
  components: {
    Input,
    TextArea,
    Button
  }
};
</script>

<style lang='scss'>
.contacts {
  padding: 50px;
}
</style>
