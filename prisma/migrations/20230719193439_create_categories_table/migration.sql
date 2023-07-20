-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "title" VARCHAR(40) NOT NULL,
    "cretaed_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);
