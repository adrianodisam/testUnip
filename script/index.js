let url =
  'https://sistemashomologacao.suafaculdade.com.br/processoseletivo/administrativopresencial/api/alunos';

async function getCont() {
  try {
    const response = await fetch(url);
  } catch (error) {
    console.error(error);
  }
}

getCont();
