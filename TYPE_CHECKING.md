# Understanding TypeScript Build Errors

## Why These Errors Happen

### 1. **Strict Type Checking in Production**
- Next.js runs **strict TypeScript checking** during `npm run build`
- This catches type errors that might not show in development
- Production builds are more strict to ensure code quality

### 2. **Component Prop Types**
- Libraries like `lucide-react` define exact prop types
- You can only pass props that are defined in the component's interface
- Extra props (like `title` on `CheckCircle`) cause TypeScript errors

### 3. **Dev vs Production**
- Development mode (`npm run dev`) is more lenient
- Production builds (`npm run build`) catch all type errors
- This is why errors only appear during deployment

## How to Catch Errors Earlier

### Run Type Checking Locally

Before pushing to GitHub, run:

```bash
# Check types without building
npx tsc --noEmit

# Or build locally to catch all errors
npm run build
```

This will show you the same errors that Render sees, so you can fix them before deploying.

### Common Issues and Fixes

#### Issue 1: Missing Props in Component Interface
**Error**: `Property 'id' does not exist on type 'CardProps'`
**Fix**: Add the prop to the component's TypeScript interface

```typescript
interface CardProps {
  id?: string; // Add this
  // ... other props
}
```

#### Issue 2: Invalid Props on Third-Party Components
**Error**: `Property 'title' does not exist on type 'CheckCircle'`
**Fix**: Wrap the component or use a different approach

```typescript
// ❌ Wrong
<CheckCircle title="Tooltip" />

// ✅ Correct
<span title="Tooltip">
  <CheckCircle />
</span>
```

## Best Practices

1. **Always run `npm run build` locally** before pushing
2. **Use TypeScript interfaces** for all custom components
3. **Check component documentation** before adding props
4. **Use wrapper elements** for HTML attributes on icon components

## Quick Pre-Deploy Checklist

Before pushing to GitHub:

```bash
# 1. Check types
npx tsc --noEmit

# 2. Build locally
npm run build

# 3. Test the build
npm start

# 4. If all pass, push to GitHub
git add .
git commit -m "Your message"
git push
```

This ensures your code will build successfully on Render!

