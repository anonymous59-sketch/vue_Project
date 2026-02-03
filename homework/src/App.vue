<script setup>
  import { RouterLink, RouterView } from "vue-router"
  import {computed, ref} from "vue";
  const homeworkday = new Date('2026-02-03');
  const month = ref(homeworkday.getMonth() + 1)
  const day = ref(homeworkday.getDate());
  const today = computed(() => (`homework ${('0' + month.value).slice(-2)}${('0' + day.value).slice(-2)} 박상원`));
</script>

<template>
  <header class="app-header">
    <nav>
      <ul class="nav-list">
        <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
        <li><RouterLink to="/route" class="nav-link">Router Test</RouterLink></li>
        <li><RouterLink to="/memo" class="nav-link">Memo</RouterLink></li>
      </ul>
    </nav>
  </header>

  <main class="app-content">
    <h1 class="page-title">{{ today }}</h1>
    <div class="view-container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
:global(body) {
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
background-color: #f5f7fa;
color: #2c3e50;
}

.app-header {
background-color: #ffffff;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
padding: 0 20px;
position: sticky; 
top: 0;
z-index: 100;
}

.nav-list {
display: flex;
justify-content: center; 
align-items: center;
list-style: none;
margin: 0;
padding: 1rem 0;
gap: 40px;
}

.nav-link {
text-decoration: none;
color: #57606f;
font-weight: 600;
font-size: 1.1rem;
padding: 8px 12px;
border-radius: 8px;
transition: all 0.3s ease;
}

.nav-link:hover {
background-color: #f1f2f6;
color: #42b983;
}

.nav-link.router-link-active {
color: #42b983;
background-color: #e3fcf0;
}

.app-content {
max-width: 800px; 
margin: 40px auto;
padding: 0 20px;
}

.page-title {
text-align: center;
font-size: 2rem;
margin-bottom: 40px;
color: #2c3e50;
font-weight: 700;
}

.view-container {
background: white;
padding: 30px;
border-radius: 12px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
min-height: 300px;
}
</style>
