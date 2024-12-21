<template>
  <div class="note">
    <div class="card p-2 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Add a new note"
            v-model="newNote"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link" @click="addNote" :disabled="!newNote">
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>
<script setup>
import { onUpdated, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import Note from "@/components/Note/Note.vue";

const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non ipsam architecto sequi quo, itaque eos quos obcaecati nesciunt quod, ullam a quis nobis. Laborum, veritatis quaerat? Laborum, quibusdam dicta!",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non ipsam architecto sequi quo, itaque eos quos obcaecati nesciunt quod, ullam a quis nobis. Laborum, veritatis quaerat? Laborum, quibusdam dicta!",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non ipsam architecto sequi quo, itaque eos quos obcaecati nesciunt quod, ullam a quis nobis. Laborum, veritatis quaerat? Laborum, quibusdam dicta!",
  },
  {
    id: 4,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non ipsam architecto sequi quo, itaque eos quos obcaecati nesciunt quod, ullam a quis nobis. Laborum, veritatis quaerat? Laborum, quibusdam dicta!",
  },
  {
    id: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non ipsam architecto sequi quo, itaque eos quos obcaecati nesciunt quod, ullam a quis nobis. Laborum, veritatis quaerat? Laborum, quibusdam dicta!",
  },
  {
    id: 6,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non ipsam architecto sequi quo, itaque eos quos obcaecati nesciunt quod, ullam a quis nobis. Laborum, veritatis quaerat? Laborum, quibusdam dicta!",
  },
  {
    id: 7,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non ipsam architecto sequi quo, itaque eos quos obcaecati nesciunt quod, ullam a quis nobis. Laborum, veritatis quaerat? Laborum, quibusdam dicta!",
  },
  {
    id: 8,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non ipsam architecto sequi quo, itaque eos quos obcaecati nesciunt quod, ullam a quis nobis. Laborum, veritatis quaerat? Laborum, quibusdam dicta!",
  },
]);

//

const addNote = () => {
  const note = {
    id: uuidv4(),
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};

/** delete note */

const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id);
};
</script>

<style lang="scss" scoped></style>
