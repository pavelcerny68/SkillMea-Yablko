document.getElementById('photo').addEventListener('change', function(e) {
            const reader = new FileReader();
            reader.onload = function() {
                const preview = document.getElementById('preview');
                preview.style.display = 'block';
                preview.src = reader.result;
            }
            reader.readAsDataURL(e.target.files[0]);
        });

        document.getElementById('myForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const photo = document.getElementById('photo').files[0];

            // Zde můžete přidat logiku pro zpracování dat
            console.log({
                phone,
                date,
                time,
                photoName: photo.name
            });

            alert('Data byla úspěšně odeslána!');
            this.reset();
            document.getElementById('preview').style.display = 'none';
        });