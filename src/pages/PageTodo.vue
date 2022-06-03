<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <q-item-label header>General</q-item-label>

      <q-item
        v-for="(task, key) in tasks"
        :key="key"
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strike': task.completed }">
            {{ task.name }}
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
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
};
</script>
