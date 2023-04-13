-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "team_id" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "player_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "jersey" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "Stat" (
    "id" INTEGER NOT NULL,
    "statId" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "rebounds" INTEGER NOT NULL,
    "steal" INTEGER NOT NULL,
    "blocks" INTEGER NOT NULL,
    "fouls" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,

    CONSTRAINT "Stat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "game_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "home_score" INTEGER NOT NULL,
    "away_score" INTEGER NOT NULL,
    "was_home" TEXT NOT NULL,
    "was_away" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Team_team_id_key" ON "Team"("team_id");

-- CreateIndex
CREATE UNIQUE INDEX "Player_jersey_key" ON "Player"("jersey");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_name_fkey" FOREIGN KEY ("name") REFERENCES "Team"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
