function defaultTasks() {
  return [
    { title: "Préparer le cours DevOps", done: true },
    { title: "Corriger les TP", done: false },
    { title: "Préparer la séance 2", done: false },
    { title: "Apprendre Git et GitHub", done: false }
  ];
}

function addTask(tasks, title) {
  if (!title.trim()) return;
  tasks.push({ title: title.trim(), done: false });
}

function toggleTask(tasks, index) {
  if (tasks[index]) {
    tasks[index].done = !tasks[index].done;
  }
}

function removeTask(tasks, index) {
  tasks.splice(index, 1);
}

module.exports = { defaultTasks, addTask, toggleTask, removeTask };