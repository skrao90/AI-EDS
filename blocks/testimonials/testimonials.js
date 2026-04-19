/**
 * TESTIMONIALS BLOCK
 * ------------------
 * Grid of client quotes with photo, name, role.
 * Authored as a table, one row per testimonial:
 *   | Testimonials |              |              |             |
 *   | [photo]      | Mariya Jannat | Developer   | "The financial markets ..." |
 */

export default function decorate(block) {
  const grid = document.createElement('div');
  grid.className = 'testimonials-grid';

  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (cells.length < 4) return;

    const card = document.createElement('div');
    card.className = 'testimonial-card';

    const stars = document.createElement('div');
    stars.className = 'testimonial-stars';
    stars.textContent = '★★★★★';
    card.append(stars);

    const quote = document.createElement('p');
    quote.className = 'testimonial-text';
    quote.textContent = cells[3].textContent.trim().replace(/^["“]|["”]$/g, '');
    card.append(quote);

    const author = document.createElement('div');
    author.className = 'testimonial-author';

    const avatar = document.createElement('div');
    avatar.className = 'testimonial-avatar';
    const pic = cells[0].querySelector('picture, img');
    if (pic) {
      avatar.append(pic.tagName === 'IMG' ? pic.parentElement || pic : pic);
    } else {
      avatar.textContent = (cells[1].textContent.trim()[0] || '?').toUpperCase();
    }

    const meta = document.createElement('div');
    meta.innerHTML = `
      <div class="testimonial-name">${cells[1].textContent.trim()}</div>
      <div class="testimonial-role">${cells[2].textContent.trim()}</div>
    `;

    author.append(avatar, meta);
    card.append(author);
    grid.append(card);
  });

  block.innerHTML = '';
  block.append(grid);
}
