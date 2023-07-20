-- CreateTable
CREATE TABLE "subcategories" (
    "id" UUID NOT NULL,
    "title" VARCHAR(40) NOT NULL,
    "cretaed_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "category_id" UUID NOT NULL,

    CONSTRAINT "subcategories_pkey" PRIMARY KEY ("id")
);
