function checkSymptoms() {
    const symptoms = document.querySelectorAll('input[name="symptoms"]:checked');
    let diseases = new Set();

    symptoms.forEach(symptom => {
        switch (symptom.value) {
            case 'febre-alta':
            case 'dor-de-cabeca':
            case 'sangramentos':
            case 'dor-muscular':
            case 'calafrios':
            case 'olhos-vermelhos':
            case 'vomitos':
            case 'dor-na-panturrilha-lombar':
                diseases.add('Leptospirose');
                break;
            case 'contracoes-musculares':
            case 'dificuldade-respirar':
            case 'pressao-alta':
            case 'sudorese':
                diseases.add('Tétano');
                break;
            case 'sangramentos-fezes':
            case 'dores-abdominais':
                diseases.add('Diarreia aguda');
                break;
            case 'fadiga':
            case 'ictericia':
            case 'urina-escura':
            case 'fezes-claras':
            case 'perda-de-apetite':
                diseases.add('Hepatite A');
                break;
            case 'febre-alta':
            case 'dor-muscular':
            case 'erupcoes-cutaneas':
            case 'dores-nas-articulacoes':
            case 'hemorragia-intensa':
            case 'dificuldade-respirar':
            case 'edema':
            case 'rubor':
                diseases.add('Dengue');
                break;
            case 'lugares-umidos-escuros':
            case 'entulhos-ou-destrocos':
                diseases.add('Animais peçonhentos');
                break;
            default:
                break;
        }
    });

    displayResults(diseases);
}

function displayResults(diseases) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (diseases.size === 0) {
        resultDiv.innerHTML = '<p>Nenhuma doença identificada com base nos sintomas selecionados.</p>';
    } else {
        resultDiv.innerHTML = '<p>Doenças identificadas com base nos sintomas selecionados:</p>';
        const ul = document.createElement('ul');
        diseases.forEach(disease => {
            const li = document.createElement('li');
            li.textContent = disease;
            ul.appendChild(li);
        });
        resultDiv.appendChild(ul);
    }
}
