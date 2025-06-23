<template>
    <form class="quote-form pt-5">
        <div class="row">
            <div class="col-xl-12">
                        <h2 class="theme-primary-color">Get A Quick Qoute Now</h2>
            </div>
        </div>
      <div class="form-row">
        <input type="text" placeholder="Full Name*" required />
        <input type="text" placeholder="Phone*" required />
        <input type="email" placeholder="Email*" required />
        <select required>
          <option value="" disabled selected>Select Box Type</option>
          <option value="Straight Tuck Boxes">Straight Tuck Boxes</option>
          <option value="Reverse Tuck Boxes">Reverse Tuck Boxes</option>
          <option value="Lock Bottom Boxes">Lock Bottom Boxes</option>
          <option value="Holster Boxes">Holster Boxes</option>
          <option value="Tuck Top Boxes">Tuck Top Boxes</option>
          <option value="Sleeve Boxes">Sleeve Boxes</option>
          <option value="Two-Piece Boxes">Two-Piece Boxes</option>
          <option value="Folding Cartons">Folding Cartons</option>
          <option value="Rigid Boxes">Rigid Boxes</option>
          <option value="Seal End Box">Seal End Box</option>
          <option value="Beer Tray with lid">Beer Tray with lid</option>
          <option value="Book Style Boxes">Book Style Boxes</option>
          <option value="Dispenser Boxes">Dispenser Boxes</option>
          <option value="Cigar Box">Cigar Box</option>
          <option value="Flip Top Box">Flip Top Box</option>
          <option value="Tray with Sleeve">Tray with Sleeve</option>
          <option value="One Piece Boxes">One Piece Boxes</option>
          <option value="Suitcase Boxes">Suitcase Boxes</option>
          <option value="Auto-lock Bottom Boxes">Auto-lock Bottom Boxes</option>
          <option value="Display Boxes">Display Boxes</option>
          <option value="5-panel Hanger Boxes">5-panel Hanger Boxes</option>
          <option value="Crash Bottom Boxes">Crash Bottom Boxes</option>
          <option value="One-piece Tuck Top Boxes">One-piece Tuck Top Boxes</option>
          <option value="Boxes with Custom Cutouts">Boxes with Custom Cutouts</option>
          <option value="Boxes with Thumb Tabs">Boxes with Thumb Tabs</option>
          <option value="Bubble Mailers">Bubble Mailers</option>
          <option value="Roll end tuck top corrugated">Roll end tuck top corrugated</option>
          <option value="Hang Tab Boxes">Hang Tab Boxes</option>
          <option value="Pillow Boxes">Pillow Boxes</option>
          <option value="Snap Lock Bottom Boxes">Snap Lock Bottom Boxes</option>
          <option value="Paper Bags">Paper Bags</option>
          <option value="Mylar Bags">Mylar Bags</option>
          <option value="Die Cut Mylar Bags">Die Cut Mylar Bags</option>
          <option value="Mylar Pouches">Mylar Pouches</option>
          <option value="Mylar ziplock bags">Mylar ziplock bags</option>
          <option value="Heat seal mylar bags">Heat seal mylar bags</option>
          <option value="Custom zipper pouches">Custom zipper pouches</option>
          <option value="Circle mylar bags">Circle mylar bags</option>
          <option value="Sealed mylar bags">Sealed mylar bags</option>
          <option value="Cigaratte boxes">Cigaratte boxes</option>
          <option value="Chilled resistance boxes">Chilled resistance boxes</option>
          <option value="Clear Lid Display boxes">Clear Lid Display boxes</option>
          <option value="Takeout boxes">Takeout boxes</option>
          <option value="Gable boxes">Gable boxes</option>
          <option value="Handle boxes">Handle boxes</option>
          <option value="Tuck top mailer boxes">Tuck top mailer boxes</option>
          <option value="Double wall tuck top">Double wall tuck top</option>
          <option value="Hexagon boxes">Hexagon boxes</option>
          <option value="Popup Display Boxes">Popup Display Boxes</option>
          <option value="Pyramid Boxes">Pyramid Boxes</option>
          <option value="Window Display Boxes">Window Display Boxes</option>
          <option value="Telescope Boxes">Telescope Boxes</option>
          <option value="Cube Boxes">Cube Boxes</option>
          <option value="Round Top Boxes">Round Top Boxes</option>
          <option value="Roll End Tuck Top Boxes">Roll End Tuck Top Boxes</option>
          <option value="Roll End Lid Boxes">Roll End Lid Boxes</option>
        </select>
      </div>
      <div class="form-row">
        <select required>
          <option value="" disabled selected>Select Material</option>
          <option value="Corrugated Stock">Corrugated Stock</option>
          <option value="Foil Metallic Cardstock">Foil Metallic Cardstock</option>
          <option value="Kraft-ecofriendly Brown Cardstock">Kraft-ecofriendly Brown Cardstock </option>
          <option value="Rigid Press Board Card">Rigid Press Board Card</option>
          <option value="Textured Neenah Cardstock">Textured Neenah Cardstock</option>
          <option value="Colored Stock">Colored Stock</option>
          <option value="Standard White Cardstock">Standard White Cardstock</option>
          <option value="Holographic Stock">Holographic Stock</option>
        </select>
        <input type="text" placeholder="Length" />
        <input type="text" placeholder="Width" />
        <input type="text" placeholder="Height" />
        <select required>
          <option value="" disabled selected>Select Dimension Unit</option>
          <option value="Inch">Inch</option>
          <option value="CM">CM</option>
          <option value="MM">MM</option>
          <option value="Unit Printing">Unit Printing</option>
        </select>
      </div>
      <div class="form-row">
        <input type="number" min="500" placeholder="Quantity (min: 500)*" required />
        <select required>
          <option value="" disabled selected>Select Printing Sides</option>
          <option value="Outside Only">Outside Only</option>
          <option value="Inside Only">Inside Only</option>
          <option value="Both Side">Both Side</option>
        </select>
        <select required>
          <option value="" disabled selected>Select Card Thickness</option>
          <option value="11 pt 230 GSM">11 pt 230 GSM</option>
          <option value="12 pt 250 GSM">12 pt 250 GSM</option>
          <option value="13 pt 270 GSM">13 pt 270 GSM</option>
          <option value="14 pt 300 GSM">14 pt 300 GSM</option>
          <option value="18 pt 350 GSM">18 pt 350 GSM</option>
          <option value="24 pt 460 GSM">24 pt 460 GSM</option>
          <option value="800 GSM">800 GSM</option>
          <option value="1000 GSM">1000 GSM</option>
          <option value="1200 GSM">1200 GSM</option>
          <option value="1400 GSM">1400 GSM</option>
          <option value="1600 GSM">1600 GSM</option>
          <option value="E-flute">E-flute</option>
          <option value="B-flute">B-flute</option>
        </select>
        <select required>
          <option value="" disabled selected>Select Coating Lamination</option>
          <option value="Glossy lamination">Glossy lamination</option>
          <option value="Matte lamination">Matte lamination</option>
          <option value="Soft touch Silk lamination">Soft touch Silk lamination</option>
          <option value="Aqueous coating">Aqueous coating</option>
          <option value="Crystal UV Liquid UV">Crystal UV Liquid UV</option>
        </select>
        <select required>
          <option value="" disabled selected>Select Extra Finishing</option>
          <option value="Debossing">Debossing</option>
          <option value="Embossing">Embossing</option>
          <option value="Foiling">Foiling</option>
          <option value="Spot UV Spot gloss">Spot UV Spot gloss</option>
          <option value="Raised Spot UV">Raised Spot UV</option>
          <option value="Holographic Foiling">Holographic Foiling</option>
          <option value="PVC Window">PVC Window</option>
        </select>
      </div>
      <div class="form-row align-top">
        <textarea
          class="details-textarea"
          placeholder="Provide detailed packaging specifications including dimensions, materials, weight restrictions, and design references and we'll get back to you with an instant quote."
          rows="3"
        ></textarea>
        <div class="file-upload">
          <label for="file-upload-input" class="file-upload-label">
            <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 34V14M24 14l-7 7m7-7l7 7" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="4" y="38" width="40" height="6" rx="3" fill="#F3F4F6"/>
            </svg>
            <div>
              <span class="upload-title">Upload your Artwork or Reference images</span>
              <span class="upload-sub">File(s) size limit is 20MB.</span>
            </div>
          </label>
          <input id="file-upload-input" type="file" multiple style="display: none;" />
        </div>
      </div>
      <div class="form-row center">
        <button type="submit" class="order-btn">Order Now</button>
      </div>
    </form>
</template>

<script setup lang="ts">
</script>

<style scoped>
.quote-form-container {
  background: #fff8ee;
  border-radius: 2rem;
  padding: 2rem 1.5rem 2.5rem 1.5rem;
  width: fit-content;
  margin: 0 auto;
}
.quote-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.2rem;
}
.form-row.align-top {
  align-items: flex-start;
}
.form-row.center {
  justify-content: center;
}
input[type="text"],
input[type="email"],
input[type="number"],
select {
  flex: 1;
  min-width: 0;
  padding: 0.9rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.7rem;
  font-size: 1rem;
  background: #fff;
}
textarea.details-textarea {
  flex: 2.5;
  min-width: 0;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.7rem;
  font-size: 1rem;
  resize: vertical;
  background: #fff;
  min-height: 90px;
}
.file-upload {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  padding: 0.2rem 0.5rem;
  border: 2px dashed #a78bfa;
  border-radius: 1rem;
  background: #faf9f6;
  cursor: pointer;
  transition: border-color 0.2s;
}
.file-upload-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.upload-title {
  font-weight: 600;
  color: #888;
  font-size: 1.1rem;
  margin-top: 0.5rem;
}
.upload-sub {
  color: #b0b0b0;
  font-size: 0.95rem;
}
.order-btn {
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.9rem 3.5rem;
  border-radius: 0.7rem;
  cursor: pointer;
  transition: background 0.2s;
    background-color:#0F2D47 !important;
    color:#fff !important;
    border: 1px solid #0F2D47 !important;
}
.order-btn:hover {
    background-color:#E1732D !important;
    color:#fff !important;
    border: 1px solid #E1732D !important;
}
@media (max-width: 1100px) {
  .form-row { flex-direction: column; gap: 0.7rem; }
  .file-upload { width: 100%; }
}
</style>
