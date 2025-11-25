<section class="cricket-betting" id="ipl-cricket-betting">
    <div class="container">
        <div class="cricket-betting__content">
            <div class="cricket-betting__header">
                <h2 class="cricket-betting__title">IPL Live Cricket Betting</h2>

                <div class="cricket-betting__nav">
                    <button class="cricket-betting__btn cricket-betting__btn--prev" type="button">‹</button>
                    <button class="cricket-betting__btn cricket-betting__btn--next" type="button">›</button>
                </div>
            </div>

            <div class="cricket-betting__slider">

                <?php

                $matches = [
                    [
                        'location' => 'Rajiv Gandhi International Stadium, Hyderabad',
                        'datetime' => 'Sunday, May 19 17:30 pm IST',
                        'team1_logo' => 'assets/images/cricket-logo.png',
                        'team1_name' => 'Sunrisers Hyderabad',
                        'team1_score' => '(19.1 OV)',
                        'team2_logo' => 'assets/images/cricket-logo.png',
                        'team2_name' => 'Rajasthan Royals',
                        'team2_score' => '(19.1 OV)',
                    ],
                    [
                        'location' => 'Rajiv Gandhi International Stadium, Hyderabad',
                        'datetime' => 'Sunday, May 19 17:30 pm IST',
                        'team1_logo' => 'assets/images/cricket-logo.png',
                        'team1_name' => 'Sunrisers Hyderabad',
                        'team1_score' => '(19.1 OV)',
                        'team2_logo' => 'assets/images/cricket-logo.png',
                        'team2_name' => 'Rajasthan Royals',
                        'team2_score' => '(19.1 OV)',
                    ],
                    [
                        'location' => 'Rajiv Gandhi International Stadium, Hyderabad',
                        'datetime' => 'Sunday, May 19 17:30 pm IST',
                        'team1_logo' => 'assets/images/cricket-logo.png',
                        'team1_name' => 'Sunrisers Hyderabad',
                        'team1_score' => '(19.1 OV)',
                        'team2_logo' => 'assets/images/cricket-logo.png',
                        'team2_name' => 'Rajasthan Royals',
                        'team2_score' => '(19.1 OV)',
                    ],
                ];

                foreach ($matches as $index => $match) {
                    $location = $match['location'];
                    $datetime = $match['datetime'];
                    $team1_logo = $match['team1_logo'];
                    $team1_name = $match['team1_name'];
                    $team1_score = $match['team1_score'];
                    $team2_logo = $match['team2_logo'];
                    $team2_name = $match['team2_name'];
                    $team2_score = $match['team2_score'];
                    $isActive = ($index === 0);

                    include 'components/match-card.php';
                }
                ?>

            </div>
        </div>
    </div>
</section>
