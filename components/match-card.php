<?php
?>

<div class="match-card <?php echo $isActive ? 'match-card--active' : ''; ?>">
    <p class="match-card__location"><?php echo htmlspecialchars($location); ?></p>
    <p class="match-card__datetime"><?php echo htmlspecialchars($datetime); ?></p>

    <div class="match-card__match">
        <div class="match-card__team">
            <img src="<?php echo htmlspecialchars($team1_logo); ?>"
                 alt="<?php echo htmlspecialchars($team1_name); ?>"
                 class="match-card__team-logo">
            <p class="match-card__team-name"><?php echo htmlspecialchars($team1_name); ?></p>
            <span class="match-card__team-score"><?php echo htmlspecialchars($team1_score); ?></span>
        </div>

        <p class="match-card__vs">VS</p>

        <div class="match-card__team">
            <img src="<?php echo htmlspecialchars($team2_logo); ?>"
                 alt="<?php echo htmlspecialchars($team2_name); ?>"
                 class="match-card__team-logo">
            <p class="match-card__team-name"><?php echo htmlspecialchars($team2_name); ?></p>
            <span class="match-card__team-score"><?php echo htmlspecialchars($team2_score); ?></span>
        </div>
    </div>

    <button type="button">Bet Now</button>
</div>
