-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "title" VARCHAR(40) NOT NULL,
    "descr" VARCHAR(40) NOT NULL,
    "price" VARCHAR(40) NOT NULL,
    "subcategoryId" UUID NOT NULL,
    "cretaed_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
