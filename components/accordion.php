<div class="accordions">
    <?php foreach ($items as $item): ?>
        <div class="accordions__item">
            <button class="accordions__button" type="button">
                <span class="accordions__button-text"><?php echo htmlspecialchars($item['title']); ?></span>
                <span class="accordions__icon">+</span>
            </button>

            <div class="accordions__answer">
                <p><?php echo htmlspecialchars($item['content']); ?></p>
            </div>
        </div>
    <?php endforeach; ?>
</div>
