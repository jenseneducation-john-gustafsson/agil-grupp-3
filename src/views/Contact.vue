<template>
  <div class="contact">
    <div class="form-body">
        <div id="form-form">
            <h3 class="form-h3">Kontakta Oss</h3>

            <form id="form-form-id" class="form-form-class">

                <div class="form-form-group">
                    <label for="Name" class="form-label">Namn</label>
                    <div class="form-input-group">
                        <input type="text" id="Name" name="Name" class="form-form-control" required>
                    </div>
                </div>

                <div class="form-form-group">
                    <label for="Email" class="form-label">Epost</label>
                    <div class="form-input-group">
                        <input type="email" id="Email" name="Email" class="form-form-control" required>
                    </div>
                </div>

                <div class="form-form-group">
                    <label for="Message" class="form-label">Din fråga</label>
                    <div class="form-input-group">
                        <textarea id="Message" name="Message" class="form-form-control" rows="6" maxlength="3000" required></textarea>
                    </div>
                </div>

                <div class="form-form-group">
                    <button type="submit" id="form-button" class="form-btn form-btn-primary form-btn-lg form-btn-block">Send Message</button>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>


