//@ts-nocheck ! issue with Next.js 13
import RecipeContent from "@/components/Recipes/Content";

export default function RecipePage({ params }: { params: { id: string } }) {
  return (
    <>
      <RecipeContent id={params.id} />
    </>
  )
}