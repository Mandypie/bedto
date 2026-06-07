/*
𝕓𝔸𝕤𝕖 𝕓𝕪 ℂ𝕣𝕪𝕡𝕥𝕠 𝕃𝕠𝕣𝕕
*/
//========ℝ𝕒𝕚𝕕𝕖𝕟========
global.prefix = [".", "!", ".", ",", "🐤", "🗿"]; 
global.publik = true
global.owner = ["2348084718594"] 
global.namabot = 'ℝ𝔸𝕀𝔻𝔼ℕ'
//======================
global.mess = { 
owner: '𝔾𝔼𝕋 𝕋𝔽 𝕆𝕌𝕋 𝕆𝔽 ℍ𝔼ℝ𝔼 ℂ𝕆𝕄ℝ𝔸𝔻𝔼, 𝕀𝕊 𝔽𝕆ℝ 𝕄𝕐 𝕆𝕎ℕ𝔼ℝ 𝕆ℕ𝕃𝕐 𝔹𝔼𝔽𝕆ℝ𝔼 𝕀 𝕊𝕋ℝ𝕀𝕂𝔼🎳 𝕐𝕆𝕌ℝ 𝔸ℂℂ𝕆𝕌ℕ𝕋',
premium: '𝔾𝔼𝕋 𝕋𝔽 𝕆𝕌𝕋 𝕆𝔽 ℍ𝔼ℝ𝔼 ℂ𝕆𝕄ℝ𝔸𝔻𝔼, 𝕀𝕊 𝔽𝕆ℝ ℙℝ𝔼𝕄𝕀𝕌𝕄 𝕆ℕ𝕃𝕐 𝔹𝔼𝔽𝕆ℝ𝔼 𝕀 𝕊𝕋ℝ𝕀𝕂𝔼🎳 𝕐𝕆𝕌ℝ 𝔸ℂℂ𝕆𝕌ℕ𝕋',
succes: '𝕊𝕌ℂℂ𝔼𝕊𝕊𝔽𝕌𝕃🏆💪'
}
//======================

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})