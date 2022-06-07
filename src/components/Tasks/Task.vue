<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox class="no-pointer-events" :value="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strike': task.completed }">
        {{ task.name }} {{ id }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="row">
          <q-icon name="event" size="18px" class="q-me-xs" />
          <div class="column justify-center">
            <q-item-label class="row justify-end" caption>
              {{ task.dueDate }}
            </q-item-label>
            <q-item-label class="row justify-end" caption>
              <small>{{ task.dueTime }}</small>
            </q-item-label>
          </div>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn
        @click.stop="promptToDelete(id)"
        flat
        dense
        round
        color="red"
        icon="delete"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),

    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really Delete?",
          ok: {
            push: true,
          },
          cancel: {
            push: true,
            color: "negative",
          },
          persistent: true,
        })
        .onOk(() => {
          this.deleteTask(id)
        });
    },
  },
};
</script>

<style></style>
