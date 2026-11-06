let currentBriefcaseId = null;
        const modalElement = document.getElementById('briefcaseModal');
        const briefcaseModal = new bootstrap.Modal(modalElement);
        const gameAudio = document.getElementById('gameAudio');
        const speakerIcon = document.getElementById('speakerIcon');

        function toggleAudio() {
            if (gameAudio.paused) {
                gameAudio.play();
                speakerIcon.classList.remove('bi-volume-mute-fill');
                speakerIcon.classList.add('bi-volume-up-fill');
            } else {
                gameAudio.pause();
                speakerIcon.classList.remove('bi-volume-up-fill');
                speakerIcon.classList.add('bi-volume-mute-fill');
            }
        }

        function openBriefcase(number) {
            currentBriefcaseId = number;
            document.getElementById('modalBriefcaseImg').src = `Briefcase${number}.png`;
            briefcaseModal.show();
        }

        modalElement.addEventListener('hidden.bs.modal', function () {
            if (currentBriefcaseId !== null) {
                const btn = document.querySelector(`button[data-id="${currentBriefcaseId}"]`);
                if (btn) {
                    btn.classList.add('clicked');
                }
                currentBriefcaseId = null;
            }
        });