/// <reference no-default-lib="true"/>
/// <reference path="jsx.lib.d.ts" />
/**
 Document formats that Photoshop can open.
 */
declare enum OpenDocumentType {
    PHOTOSHOP = 1,
    BMP = 2,
    COMPUSERVEGIF = 3,
    PHOTOSHOPEPS = 4,
    FILMSTRIP = 5,
    JPEG = 6,
    PCX = 7,
    PHOTOSHOPPDF = 8,
    PHOTOCD = 9,
    PICTFILEFORMAT = 10,
    PICTRESOURCEFORMAT = 11,
    PIXAR = 12,
    PNG = 13,
    RAW = 14,
    SCITEXCT = 15,
    TARGA = 16,
    TIFF = 17,
    PHOTOSHOPDCS_1 = 18,
    PHOTOSHOPDCS_2 = 19,
    PDF = 21,
    EPS = 22,
    EPSPICTPREVIEW = 23,
    EPSTIFFPREVIEW = 24,
    ALIASPIX = 25,
    ELECTRICIMAGE = 26,
    PORTABLEBITMAP = 27,
    WAVEFRONTRLA = 28,
    SGIRGB = 29,
    SOFTIMAGE = 30,
    WIRELESSBITMAP = 31,
    CAMERARAW = 32,
    DICOM = 33,

}

/**
 Document formats that Photoshop can save to.
 */
declare enum SaveDocumentType {
    PHOTOSHOP = 1,
    BMP = 2,
    COMPUSERVEGIF = 3,
    PHOTOSHOPEPS = 4,
    JPEG = 6,
    PCX = 7,
    PHOTOSHOPPDF = 8,
    PICTFileFORMAT = 10,
    PICTRESOURCEFORMAT = 11,
    PIXAR = 12,
    PNG = 13,
    RAW = 14,
    SCITEXCT = 15,
    TARGA = 16,
    TIFF = 17,
    PHOTOSHOPDCS_1 = 18,
    PHOTOSHOPDCS_2 = 19,
    ALIASPIX = 25,
    ELECTRICIMAGE = 26,
    PORTABLEBITMAP = 27,
    WAVEFRONTRLA = 28,
    SGIRGB = 29,
    SOFTIMAGE = 30,
    WIRELESSBITMAP = 31,

}

/**
 The save options for closing a file.
 */
declare enum SaveOptionsType {
    SAVECHANGES = 1,
    DONOTSAVECHANGES = 2,
    PROMPTTOSAVECHANGES = 3,

}

/**
 Controls whether Photoshop displays dialogs during scripts.
 */
declare enum DialogModes {
    ALL = 1,
    ERROR = 2,
    NO = 3,

}

/**
 Position of document when printing.
 */
declare enum DocPositionStyle {
    PRINTCENTERED = 1,
    SIZETOFIT = 2,
    USERDEFINED = 3,

}

/**
 Color conversion type when printing.
 */
declare enum PrintColorHandling {
    PRINTERMANAGED = 1,
    PHOTOSHOPMANAGED = 2,
    SEPARATIONS = 3,

}

/**
 The document's color mode.
 */
declare enum DocumentMode {
    GRAYSCALE = 1,
    RGB = 2,
    CMYK = 3,
    LAB = 4,
    BITMAP = 5,
    INDEXEDCOLOR = 6,
    MULTICHANNEL = 7,
    DUOTONE = 8,

}

/**
 The destination color mode. Note: Color images must be changed to Grayscale mode before you can change them to Bitmap mode.
 */
declare enum ChangeMode {
    GRAYSCALE = 1,
    RGB = 2,
    CMYK = 3,
    LAB = 4,
    BITMAP = 5,
    INDEXEDCOLOR = 6,
    MULTICHANNEL = 7,

}

/**
 The type of color model that defines the document's working space.
 */
declare enum ColorProfileType {
    NONE = 1,
    WORKING = 2,
    CUSTOM = 3,

}

/**
 The document window fill type.
 */
declare enum DocumentFill {
    WHITE = 1,
    BACKGROUNDCOLOR = 2,
    TRANSPARENT = 3,

}

/**
 The editorial urgency status of the artwork.
 */
declare enum Urgency {
    NONE = 0,
    LOW = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    NORMAL = 5,
    SIX = 6,
    SEVEN = 7,
    HIGH = 8,

}

/**
 The image orientation on the media.
 */
declare enum Orientation {
    LANDSCAPE = 1,
    PORTRAIT = 2,

}

/**
 The color conversion intent.
 */
declare enum Intent {
    PERCEPTUAL = 1,
    SATURATION = 2,
    RELATIVECOLORIMETRIC = 3,
    ABSOLUTECOLORIMETRIC = 4,

}

/**
 The orientation of the object.
 */
declare enum Direction {
    HORIZONTAL = 1,
    VERTICAL = 2,

}

/**
 The cache to be targeted in a purge operation.
 */
declare enum PurgeTarget {
    UNDOCACHES = 1,
    HISTORYCACHES = 2,
    CLIPBOARDCACHE = 3,
    ALLCACHES = 4,

}

/**
 The point around which to transform the object.
 */
declare enum AnchorPosition {
    TOPLEFT = 1,
    TOPCENTER = 2,
    TOPRIGHT = 3,
    MIDDLELEFT = 4,
    MIDDLECENTER = 5,
    MIDDLERIGHT = 6,
    BOTTOMLEFT = 7,
    BOTTOMCENTER = 8,
    BOTTOMRIGHT = 9,

}

/**
 The method to use to resample the image.
 */
declare enum ResampleMethod {
    NONE = 1,
    NEARESTNEIGHBOR = 2,
    BILINEAR = 3,
    BICUBIC = 4,
    BICUBICSHARPER = 5,
    BICUBICSMOOTHER = 6,
    BICUBICAUTOMATIC = 7,
    AUTOMATIC = 8,
    PRESERVEDETAILS = 9,

}

/**
 The operating system.
 */
declare enum OperatingSystem {
    OS2 = 1,
    WINDOWS = 2,

}

/**
 The colors whose inclusion to force in the color table.
 */
declare enum ForcedColors {
    NONE = 1,
    BLACKWHITE = 2,
    PRIMARIES = 3,
    WEB = 4,

}

/**
 The palette type for converting an image to indexed color.
 */
declare enum PaletteType {
    EXACT = 1,
    MACOSPALETTE = 2,
    WINDOWSPALETTE = 3,
    WEBPALETTE = 4,
    UNIFORM = 5,
    LOCALPERCEPTUAL = 6,
    LOCALSELECTIVE = 7,
    LOCALADAPTIVE = 8,
    MASTERPERCEPTUAL = 9,
    MASTERSELECTIVE = 10,
    MASTERADAPTIVE = 11,
    PREVIOUSPALETTE = 12,

}

/**
 The type of dither.
 */
declare enum DitherType {
    NONE = 1,
    DIFFUSION = 2,
    PATTERN = 3,
    NOISE = 4,

}

/**
 The type of image to use as a low-resolution preview in the destination application.
 */
declare enum MacPreviewType {
    NONE = 1,
    MONOCHROMETIFF = 2,
    EIGHTBITTIFF = 3,
    MACOSMONOCHROME = 4,
    MACOSEIGHTBIT = 5,
    MACOSJPEG = 6,

}

/**
 The encoding to use when saving documents.
 */
declare enum SaveEncoding {
    ASCII = 3,
    BINARY = 1,
    JPEGLOW = 2,
    JPEGMEDIUM = 4,
    JPEGHIGH = 5,
    JPEGMAXIMUM = 6,

}

/**
 The options for saving a JPEG file.
 */
declare enum FormatOptionsType {
    STANDARDBASELINE = 1,
    OPTIMIZEDBASELINE = 2,
    PROGRESSIVE = 3,

}

/**
 The type of compression to use when saving a document in PDF format.
 */
declare enum PDFEncodingType {
    NONE = 0,
    PDFZIP = 1,
    JPEG = 2,
    PDFZIP4BIT = 3,
    JPEGHIGH = 4,
    JPEGMEDHIGH = 5,
    JPEGMED = 6,
    JPEGMEDLOW = 7,
    JPEGLOW = 8,
    JPEG2000HIGH = 9,
    JPEG2000MEDHIGH = 10,
    JPEG2000MED = 11,
    JPEG2000MEDLOW = 12,
    JPEG2000LOW = 13,
    JPEG2000LOSSLESS = 14,

}

/**
 The PDF/X standard with which the document complies.
 */
declare enum PDFStandardType {
    NONE = 0,
    PDFX1A2001 = 1,
    PDFX1A2003 = 2,
    PDFX32002 = 3,
    PDFX32003 = 4,
    PDFX42008 = 5,

}

/**
 The PDF version with which to make the document compatible.
 */
declare enum PDFCompatibilityType {
    PDF13 = 1,
    PDF14 = 2,
    PDF15 = 3,
    PDF16 = 4,
    PDF17 = 5,

}

/**
 Downsampling options when saving as PDF.
 */
declare enum PDFResampleType {
    NONE = 0,
    PDFAVERAGE = 1,
    PDFSUBSAMPLE = 2,
    PDFBICUBIC = 3,

}

/**
 The compression type to use whan saving as PICT.
 */
declare enum PICTCompression {
    NONE = 1,
    JPEGLOWPICT = 2,
    JPEGMEDIUMPICT = 4,
    JPEGHIGHPICT = 5,
    JPEGMAXIMUMPICT = 6,

}

/**
 The formatting for the filename extension.
 */
declare enum MacExtensionType {
    NONE = 1,
    LOWERCASE = 2,
    UPPERCASE = 3,

}

/**
 The encoding to use when saving to TIFF format.
 */
declare enum TiffEncodingType {
    NONE = 1,
    TIFFLZW = 2,
    JPEG = 3,
    TIFFZIP = 4,

}

/**
 The layer compression type.
 */
declare enum LayerCompressionType {
    RLE = 1,
    ZIP = 2,

}

/**
 The platform-specific order in which bytes will be read.
 */
declare enum ByteOrderType {
    IBM = 1,
    MACOS = 2,

}

/**
 The DCS format.
 */
declare enum DCSType {
    NOCOMPOSITE = 1,
    GRAYSCALECOMPOSITE = 2,
    COLORCOMPOSITE = 3,

}

/**
 The type of pixels to trim around an image.
 */
declare enum TrimType {
    TRANSPARENT = 0,
    TOPLEFT = 1,
    BOTTOMRIGHT = 9,

}

/**
 The color picker to use.
 */
declare enum ColorPicker {
    ADOBE = 1,
    APPLE = 2,
    WINDOWS = 3,
    PLUGIN = 4,

}

/**
 The type of object(s) to reset to default settings.
 */
declare enum ResetTarget {
    ALLWARNINGS = 1,
    ALLTOOLS = 2,
    EVERYTHING = 3,

}

/**
 The application's behavior regarding image previews and file extensions when a save method is called.
 */
declare enum SaveBehavior {
    NEVERSAVE = 1,
    ALWAYSSAVE = 2,
    ASKWHENSAVING = 3,

}

/**
 The pointer for the following tools: Marquee, Lasso, Polygonal Lasso, Magic Wand, Crop, Slice, Patch Eyedropper, Pen, Gradient, Line, Paint Bucket, Magnetic Lasso, Magnetic Pen, Freeform Pen, Measure, and Color Sampler.
 */
declare enum PaintingCursors {
    STANDARD = 1,
    PRECISE = 2,
    BRUSHSIZE = 3,

}

/**
 The pointer for the following tools: Eraser, Pencil, Paintbrush, Healing Brush, Rubber Stamp, Pattern Stamp, Smudge, Blur, Sharpen, Dodge, Burn, Sponge.
 */
declare enum OtherPaintingCursors {
    STANDARDOTHER = 1,
    PRECISEOTHER = 2,

}

/**
 The size of grid squares.
 */
declare enum GridSize {
    NONE = 1,
    SMALL = 2,
    MEDIUM = 3,
    LARGE = 4,

}

/**
 The measurement unit for ruler increments.
 */
declare enum Units {
    PIXELS = 1,
    INCHES = 2,
    CM = 3,
    MM = 4,
    POINTS = 5,
    PICAS = 6,
    PERCENT = 7,

}

/**
 The measurement unit for type.
 */
declare enum TypeUnits {
    PIXELS = 1,
    MM = 4,
    POINTS = 5,

}

/**
 The point type.
 */
declare enum PointType {
    POSTSCRIPT = 1,
    TRADITIONAL = 2,

}

/**
 The line style for nonprinting grids displayed over images.
 */
declare enum GridLineStyle {
    SOLID = 1,
    DASHED = 2,
    DOTTED = 3,

}

/**
 The line style for nonprinting guides displayed over images.
 */
declare enum GuideLineStyle {
    SOLID = 1,
    DASHED = 2,

}

/**
 Controls how pixels in the image are blended.
 */
declare enum BlendMode {
    PASSTHROUGH = 1,
    NORMAL = 2,
    DISSOLVE = 3,
    DARKEN = 4,
    MULTIPLY = 5,
    COLORBURN = 6,
    LINEARBURN = 7,
    LIGHTEN = 8,
    SCREEN = 9,
    COLORDODGE = 10,
    LINEARDODGE = 11,
    OVERLAY = 12,
    SOFTLIGHT = 13,
    HARDLIGHT = 14,
    VIVIDLIGHT = 15,
    LINEARLIGHT = 16,
    PINLIGHT = 17,
    DIFFERENCE = 18,
    EXCLUSION = 19,
    SUBTRACT = 29,
    DIVIDE = 30,
    HUE = 20,
    SATURATION = 21,
    COLORBLEND = 22,
    LUMINOSITY = 23,
    HARDMIX = 26,
    LIGHTERCOLOR = 27,
    DARKERCOLOR = 28,

}

/**
 The color blend mode type.
 */
declare enum ColorBlendMode {
    NORMAL = 2,
    DISSOLVE = 3,
    BEHIND = 24,
    CLEAR = 25,
    DARKEN = 4,
    MULTIPLY = 5,
    COLORBURN = 6,
    LINEARBURN = 7,
    LIGHTEN = 8,
    SCREEN = 9,
    COLORDODGE = 10,
    LINEARDODGE = 11,
    OVERLAY = 12,
    SOFTLIGHT = 13,
    HARDLIGHT = 14,
    VIVIDLIGHT = 15,
    LINEARLIGHT = 16,
    PINLIGHT = 17,
    DIFFERENCE = 18,
    EXCLUSION = 19,
    SUBTRACT = 27,
    DIVIDE = 28,
    HUE = 20,
    SATURATION = 21,
    COLOR = 22,
    LUMINOSITY = 23,
    HARDMIXBLEND = 26,

}

/**
 The type of the layer content to rasterize.
 */
declare enum RasterizeType {
    TEXTCONTENTS = 1,
    SHAPE = 2,
    FILLCONTENT = 3,
    LAYERCLIPPINGPATH = 4,
    ENTIRELAYER = 5,
    LINKEDLAYERS = 6,

}

/**
 The placement of paragraph text within the bounding box.
 */
declare enum Justification {
    LEFT = 1,
    CENTER = 2,
    RIGHT = 3,
    LEFTJUSTIFIED = 4,
    CENTERJUSTIFIED = 5,
    RIGHTJUSTIFIED = 6,
    FULLYJUSTIFIED = 7,

}

/**
 The method to use to smooth edges by softening the color transition between edge pixels and background pixels.
 */
declare enum AntiAlias {
    NONE = 1,
    SHARP = 2,
    CRISP = 3,
    STRONG = 4,
    SMOOTH = 5,

}

/**
 The capitalization to use.
 */
declare enum Case {
    NORMAL = 1,
    ALLCAPS = 2,
    SMALLCAPS = 3,

}

/**
 The language to use.
 */
declare enum Language {
    ENGLISHUSA = 1,
    ENGLISHUK = 2,
    FRENCH = 3,
    CANADIANFRENCH = 4,
    FINNISH = 5,
    GERMAN = 6,
    OLDGERMAN = 7,
    SWISSGERMAN = 8,
    ITALIAN = 9,
    NORWEGIAN = 10,
    NYNORSKNORWEGIAN = 11,
    PORTUGUESE = 12,
    BRAZILLIANPORTUGUESE = 13,
    SPANISH = 14,
    SWEDISH = 15,
    DUTCH = 16,
    DANISH = 17,

}

/**
 The type of text.
 */
declare enum TextType {
    POINTTEXT = 1,
    PARAGRAPHTEXT = 2,

}

/**
 The warp style for text.
 */
declare enum WarpStyle {
    NONE = 1,
    ARC = 2,
    ARCLOWER = 3,
    ARCUPPER = 4,
    ARCH = 5,
    BULGE = 6,
    SHELLLOWER = 7,
    SHELLUPPER = 8,
    FLAG = 9,
    WAVE = 10,
    FISH = 11,
    RISE = 12,
    FISHEYE = 13,
    INFLATE = 14,
    SQUEEZE = 15,
    TWIST = 16,

}

/**
 The text composer.
 */
declare enum TextComposer {
    ADOBESINGLELINE = 1,
    ADOBEEVERYLINE = 2,

}

/**
 The type of kerning to use for characters.
 */
declare enum AutoKernType {
    MANUAL = 1,
    METRICS = 2,
    OPTICAL = 3,

}

/**
 The strikethrough style.
 */
declare enum StrikeThruType {
    STRIKEOFF = 1,
    STRIKEHEIGHT = 2,
    STRIKEBOX = 3,

}

/**
 The type of underline.
 */
declare enum UnderlineType {
    UNDERLINEOFF = 1,
    UNDERLINERIGHT = 2,
    UNDERLINELEFT = 3,

}

/**
 The selection behavior when a selection already exists.
 */
declare enum SelectionType {
    REPLACE = 1,
    EXTEND = 2,
    DIMINISH = 3,
    INTERSECT = 4,

}

/**
 The options to use.
 */
declare enum ExportType {
    ILLUSTRATORPATHS = 1,
    SAVEFORWEB = 2,

}

/**
 The paths to exporter.
 */
declare enum IllustratorPathType {
    DOCUMENTBOUNDS = 1,
    ALLPATHS = 2,
    NAMEDPATH = 3,

}

/**
 The type of channel.
 */
declare enum ChannelType {
    COMPONENT = 1,
    MASKEDAREA = 2,
    SELECTEDAREA = 3,
    SPOTCOLOR = 4,

}

/**
 The blur method to use.
 */
declare enum RadialBlurMethod {
    SPIN = 1,
    ZOOM = 2,

}

/**
 The radial blur quality.
 */
declare enum RadialBlurQuality {
    DRAFT = 1,
    GOOD = 2,
    BEST = 3,

}

/**
 The smart blur quality.
 */
declare enum SmartBlurQuality {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,

}

/**
 The method to use for smart blurring.
 */
declare enum SmartBlurMode {
    NORMAL = 1,
    EDGEONLY = 2,
    OVERLAYEDGE = 3,

}

/**
 The type of texture or glass surface image to load for a texturizer or glass filter.
 */
declare enum TextureType {
    BLOCKS = 1,
    CANVAS = 2,
    FROSTED = 3,
    TINYLENS = 4,
    FILE = 5,

}

/**
 The method of polar distortion to use.
 */
declare enum PolarConversionType {
    RECTANGULARTOPOLAR = 1,
    POLARTORECTANGULAR = 2,

}

/**
 The size of undulations.
 */
declare enum RippleSize {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3,

}

/**
 The method to use to treat undistorted areas or areas left blank in an image to which a filter in the Distort category has been applied.
 */
declare enum UndefinedAreas {
    WRAPAROUND = 1,
    REPEATEDGEPIXELS = 2,

}

/**
 The method to use to fill the empty space left by offsetting a an image or selection.
 */
declare enum OffsetUndefinedAreas {
    SETTOBACKGROUND = 1,
    WRAPAROUND = 2,
    REPEATEDGEPIXELS = 3,

}

/**
 The curve (or stretch shape) to use for the distortion.
 */
declare enum SpherizeMode {
    NORMAL = 1,
    HORIZONTAL = 2,
    VERTICAL = 3,

}

/**
 Describes how the displacement map fits the image if the image is not the same size as the map.
 */
declare enum DisplacementMapType {
    STRETCHTOFIT = 1,
    TILE = 2,

}

/**
 The type of wave.
 */
declare enum WaveType {
    SINE = 1,
    TRIANGULAR = 2,
    SQUARE = 3,

}

/**
 The method of zigzagging.
 */
declare enum ZigZagType {
    AROUNDCENTER = 1,
    OUTFROMCENTER = 2,
    PONDRIPPLES = 3,

}

/**
 The distribution method to use when applying an Add Noise filter.
 */
declare enum NoiseDistribution {
    UNIFORM = 1,
    GAUSSIAN = 2,

}

/**
 The type of lens.
 */
declare enum LensType {
    ZOOMLENS = 1,
    PRIME35 = 2,
    PRIME105 = 3,
    MOVIEPRIME = 5,

}

/**
 The type of fields to eliminate.
 */
declare enum EliminateFields {
    ODDFIELDS = 1,
    EVENFIELDS = 2,

}

/**
 The method for replacing eliminated fields.
 */
declare enum CreateFields {
    DUPLICATION = 1,
    INTERPOLATION = 2,

}

/**
 The pixel dimensions of the image.
 */
declare enum PhotoCDSize {
    MINIMUM = 1,
    SMALL = 2,
    MEDIUM = 3,
    LARGE = 4,
    EXTRALARGE = 5,
    MAXIMUM = 6,

}

/**
 The number of bits per color channel.
 */
declare enum BitsPerChannelType {
    ONE = 1,
    EIGHT = 8,
    SIXTEEN = 16,
    THIRTYTWO = 32,

}

/**
 The number of bits per pixel to use when compressing a PICT file.
 */
declare enum PICTBitsPerPixels {
    TWO = 2,
    FOUR = 4,
    EIGHT = 8,
    SIXTEEN = 16,
    THIRTYTWO = 32,

}

/**
 The resolution to use when saving an image in Targa format.
 */
declare enum TargaBitsPerPixels {
    SIXTEEN = 16,
    TWENTYFOUR = 24,
    THIRTYTWO = 32,

}

/**
 The value type of an object.
 */
declare enum DescValueType {
    INTEGERTYPE = 1,
    DOUBLETYPE = 2,
    UNITDOUBLE = 3,
    STRINGTYPE = 4,
    BOOLEANTYPE = 5,
    LISTTYPE = 6,
    OBJECTTYPE = 7,
    ENUMERATEDTYPE = 8,
    REFERENCETYPE = 9,
    CLASSTYPE = 10,
    ALIASTYPE = 11,
    RAWTYPE = 12,
    LARGEINTEGERTYPE = 13,

}

/**
 The type of action reference object.
 */
declare enum ReferenceFormType {
    NAME = 1,
    INDEX = 2,
    IDENTIFIER = 3,
    OFFSET = 4,
    ENUMERATED = 5,
    PROPERTY = 6,
    CLASSTYPE = 7,

}

/**
 The number of bits per channel (also called pixel depth or color depth). The number selected indicates the exponent of 2. For example, a pixel with a bit-depth of EIGHT has 2-to-the-8th, or 256, possible color values.
 */
declare enum BMPDepthType {
    ONE = 1,
    FOUR = 4,
    EIGHT = 8,
    SIXTEEN = 16,
    TWENTYFOUR = 24,
    THIRTYTWO = 32,
    BMP_X1R5G5B5 = 60,
    BMP_A1R5G5B5 = 61,
    BMP_R5G6B5 = 62,
    BMP_X4R4G4B4 = 63,
    BMP_A4R4G4B4 = 64,
    BMP_R8G8B8 = 65,
    BMP_X8R8G8B8 = 66,
    BMP_A8R8G8B8 = 67,

}

/**
 The copyright status of the document.
 */
declare enum CopyrightedType {
    COPYRIGHTEDWORK = 1,
    PUBLICDOMAIN = 2,
    UNMARKED = 3,

}

/**
 The quality of an image converted to bitmap mode.
 */
declare enum BitmapConversionType {
    HALFTHRESHOLD = 1,
    PATTERNDITHER = 2,
    DIFFUSIONDITHER = 3,
    HALFTONESCREEN = 4,
    CUSTOMPATTERN = 5,

}

/**
 The shape of the dots (ink deposits) in the halftone screen.
 */
declare enum BitmapHalfToneType {
    ROUND = 1,
    DIAMOND = 2,
    ELLIPSE = 3,
    LINE = 4,
    SQUARE = 5,
    CROSS = 6,

}

/**
 The color to use for matting.
 */
declare enum MatteType {
    NONE = 1,
    FOREGROUND = 2,
    BACKGROUND = 3,
    WHITE = 4,
    BLACK = 5,
    SEMIGRAY = 6,
    NETSCAPE = 7,

}

/**
 Method to use for interpreting selective color adjustment specifications.
 */
declare enum AdjustmentReference {
    RELATIVE = 1,
    ABSOLUTE = 2,

}

/**
 The color profile to use.
 */
declare enum OpenDocumentMode {
    GRAYSCALE = 1,
    RGB = 2,
    CMYK = 3,
    LAB = 4,

}

/**
 The color profile to use.
 */
declare enum NewDocumentMode {
    GRAYSCALE = 1,
    RGB = 2,
    CMYK = 3,
    LAB = 4,
    BITMAP = 5,

}

/**
 Deprecated.
 */
declare enum PhotoCDColorSpace {
    RGB8 = 1,
    RGB16 = 2,
    LAB8 = 3,
    LAB16 = 4,

}

/**
 The placement of path or selection boundary strokes.
 */
declare enum StrokeLocation {
    INSIDE = 1,
    CENTER = 2,
    OUTSIDE = 3,

}

/**
 Color models.
 */
declare enum ColorModel {
    GRAYSCALE = 1,
    RGB = 2,
    CMYK = 3,
    LAB = 4,
    HSB = 5,
    NONE = 50,

}

/**
 When should a JavaScript debugger be shown.
 */
declare enum JavaScriptExecutionMode {
    NEVER = 1,
    ONRUNTIMEERROR = 2,
    BEFORERUNNING = 3,

}

/**
 The color space for the source when printing.
 */
declare enum SourceSpaceType {
    DOCUMENT = 1,
    PROOF = 2,

}

/**
 The types of art layers.
 */
declare enum LayerKind {
    NORMAL = 1,
    TEXT = 2,
    SOLIDFILL = 3,
    GRADIENTFILL = 4,
    PATTERNFILL = 5,
    LEVELS = 6,
    CURVES = 7,
    COLORBALANCE = 8,
    BRIGHTNESSCONTRAST = 9,
    HUESATURATION = 10,
    SELECTIVECOLOR = 11,
    CHANNELMIXER = 12,
    GRADIENTMAP = 13,
    INVERSION = 14,
    THRESHOLD = 15,
    POSTERIZE = 16,
    SMARTOBJECT = 17,
    PHOTOFILTER = 18,
    EXPOSURE = 19,
    LAYER3D = 20,
    VIDEO = 21,
    BLACKANDWHITE = 22,
    VIBRANCE = 23,

}

/**
 PDF presentation transition types.
 */
declare enum TransitionType {
    BLINDSHORIZONTAL = 1,
    BLINDSVERTICAL = 2,
    DISSOLVE = 3,
    BOXIN = 4,
    BOXOUT = 5,
    GLITTERDOWN = 6,
    GLITTERRIGHT = 7,
    GLITTERRIGHTDOWN = 8,
    NONE = 9,
    RANDOM = 10,
    SPLITHORIZONTALIN = 11,
    SPLITHORIZONTALOUT = 12,
    SPLITVERTICALIN = 13,
    SPLITVERTICALOUT = 14,
    WIPEDOWN = 15,
    WIPELEFT = 16,
    WIPERIGHT = 17,
    WIPEUP = 18,

}

/**
 Fonts for web photo gallery text.
 */
declare enum GalleryFontType {
    ARIAL = 1,
    COURIERNEW = 2,
    HELVETICA = 3,
    TIMESNEWROMAN = 4,

}

/**
 DEPRECATED. Constrain values for images.
 */
declare enum GalleryConstrainType {
    CONSTRAINWIDTH = 1,
    CONSTRAINHEIGHT = 2,
    CONSTRAINBOTH = 3,

}

/**
 DEPRECATED. Web photo gallery thumb size types.
 */
declare enum GalleryThumbSizeType {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3,
    CUSTOM = 4,

}

/**
 DEPRECATED. Web photo gallery security types.
 */
declare enum GallerySecurityType {
    NONE = 1,
    CUSTOMTEXT = 2,
    FILENAME = 3,
    COPYRIGHT = 4,
    CAPTION = 5,
    CREDIT = 6,
    TITLE = 7,

}

/**
 The function or meaning of text in a Picture Package.
 */
declare enum PicturePackageTextType {
    NONE = 1,
    USER = 2,
    FILENAME = 3,
    COPYRIGHT = 4,
    CAPTION = 5,
    CREDIT = 6,
    ORIGIN = 7,

}

/**
 The color to use for text displayed over gallery images as an antitheft deterrent.
 */
declare enum GallerySecurityTextColorType {
    BLACK = 1,
    WHITE = 2,
    CUSTOM = 3,

}

/**
 The position of the text displayed over gallery images as an antitheft deterrent.
 */
declare enum GallerySecurityTextPositionType {
    CENTERED = 1,
    UPPERLEFT = 2,
    LOWERLEFT = 3,
    UPPERRIGHT = 4,
    LOWERRIGHT = 5,

}

/**
 DEPRECATED. web photo gallery security text rotation types.
 */
declare enum GallerySecurityTextRotateType {
    ZERO = 1,
    CLOCKWISE45 = 2,
    CLOCKWISE90 = 3,
    COUNTERCLOCKWISE45 = 4,
    COUNTERCLOCKWISE90 = 5,

}

/**
 The permission state for queries.
 */
declare enum QueryStateType {
    ALWAYS = 1,
    ASK = 2,
    NEVER = 3,

}

/**
 The location of history log data.
 */
declare enum SaveLogItemsType {
    METADATA = 1,
    LOGFILE = 2,
    LOGFILEANDMETADATA = 3,

}

/**
 The history log edit options.
 */
declare enum EditLogItemsType {
    SESSIONONLY = 1,
    CONCISE = 2,
    DETAILED = 3,

}

/**
 The type of path.
 */
declare enum PathKind {
    NORMALPATH = 1,
    CLIPPINGPATH = 2,
    WORKPATH = 3,
    VECTORMASK = 4,
    TEXTMASK = 5,

}

/**
 Specifies how to combine the shapes if the destination image already has a selection.
 */
declare enum ShapeOperation {
    SHAPEADD = 1,
    SHAPEXOR = 2,
    SHAPEINTERSECT = 3,
    SHAPESUBTRACT = 4,

}

/**
 The path point kind.
 */
declare enum PointKind {
    SMOOTHPOINT = 1,
    CORNERPOINT = 2,

}

/**
 Tools for the stroke path command.
 */
declare enum ToolType {
    PENCIL = 1,
    BRUSH = 2,
    ERASER = 3,
    BACKGROUNDERASER = 4,
    CLONESTAMP = 5,
    PATTERNSTAMP = 6,
    HEALINGBRUSH = 7,
    HISTORYBRUSH = 8,
    ARTHISTORYBRUSH = 9,
    SMUDGE = 10,
    BLUR = 11,
    SHARPEN = 12,
    DODGE = 13,
    BURN = 14,
    SPONGE = 15,
    COLORREPLACEMENTTOOL = 16,

}

/**
 The destination, if any, for batch-processed files.
 */
declare enum BatchDestinationType {
    NODESTINATION = 1,
    SAVEANDCLOSE = 2,
    FOLDER = 3,

}

/**
 File naming options for the batch command.
 */
declare enum FileNamingType {
    DOCUMENTNAMEMIXED = 1,
    DOCUMENTNAMELOWER = 2,
    DOCUMENTNAMEUPPER = 3,
    SERIALNUMBER1 = 4,
    SERIALNUMBER2 = 5,
    SERIALNUMBER3 = 6,
    SERIALNUMBER4 = 7,
    SERIALLETTERLOWER = 8,
    SERIALLETTERUPPER = 9,
    MMDDYY = 10,
    MMDD = 11,
    YYYYMMDD = 12,
    YYMMDD = 13,
    YYDDMM = 14,
    DDMMYY = 15,
    DDMM = 16,
    EXTENSIONLOWER = 17,
    EXTENSIONUPPER = 18,

}

/**
 Depth map source options.
 */
declare enum DepthMapSource {
    NONE = 1,
    TRANSPARENCYCHANNEL = 2,
    LAYERMASK = 3,
    IMAGEHIGHLIGHT = 4,

}

/**
 Geometric options for shapes, such as the iris shape in the Lens Blur Filter.
 */
declare enum Geometry {
    TRIANGLE = 0,
    PENTAGON = 1,
    HEXAGON = 2,
    SQUARE = 3,
    HEPTAGON = 4,
    OCTAGON = 5,

}

/**
 The color reduction algorithm.
 */
declare enum ColorReductionType {
    PERCEPTUAL = 0,
    SELECTIVE = 1,
    ADAPTIVE = 2,
    RESTRICTIVE = 3,
    CUSTOM = 4,
    BLACKWHITE = 5,
    GRAYSCALE = 6,
    MACINTOSH = 7,
    WINDOWS = 8,

}

/**
 The default Camera RAW settings.
 */
declare enum CameraRAWSettingsType {
    CAMERA = 0,
    SELECTEDIMAGE = 1,
    CUSTOM = 2,

}

/**
 The lighting conditions (affects color balance).
 */
declare enum WhiteBalanceType {
    ASSHOT = 0,
    AUTO = 1,
    DAYLIGHT = 2,
    CLOUDY = 3,
    SHADE = 4,
    TUNGSTEN = 5,
    FLUORESCENT = 6,
    FLASH = 7,
    CUSTOM = 8,

}

/**
 The type of color space.
 */
declare enum ColorSpaceType {
    ADOBERGB = 0,
    COLORMATCHRGB = 1,
    PROPHOTORGB = 2,
    SRGB = 3,

}

/**
 The camera RAW image size.
 */
declare enum CameraRAWSize {
    MINIMUM = 0,
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3,
    EXTRALARGE = 4,
    MAXIMUM = 5,

}

/**
 The PDF magnification type.
 */
declare enum MagnificationType {
    ACTUALSIZE = 0,
    FITPAGE = 1,

}

/**
 The style to use when cropping a page.
 */
declare enum CropToType {
    BOUNDINGBOX = 0,
    MEDIABOX = 1,
    CROPBOX = 2,
    BLEEDBOX = 3,
    TRIMBOX = 4,
    ARTBOX = 5,

}

/**
 The type size to use for font previews in the Type tool font menus.
 */
declare enum FontPreviewType {
    NONE = 0,
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3,
    EXTRALARGE = 4,
    HUGE = 5,

}

/**
 Font size in panels and dialogs.
 */
declare enum FontSize {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3,

}

/**
 The source for recording measurements.
 */
declare enum MeasurementSource {
    MEASURESELECTION = 1,
    MEASURECOUNTTOOL = 2,
    MEASURERULERTOOL = 3,

}

/**
 The measurement upon which to take action.
 */
declare enum MeasurementRange {
    ALLMEASUREMENTS = 1,
    ACTIVEMEASUREMENTS = 2,

}

/**
 A collection of documents.
 */
declare class Documents {


    /**
     * A collection of documents.
     * @param p0 UnitValue The width of the document.,
     * @param p1 UnitValue The height of the document.,
     * @param p2 number The resolution of the document (in pixels per inch),
     * @param p3 string The name of the document.,
     * @param p4 NewDocumentMode The document mode.,
     * @param p5 DocumentFill The initial fill of the document.,
     * @param p6 number The initial pixel aspect ratio of the document.,
     * @param p7 BitsPerChannelType The number of bits per channel.,
     * @param p8 string The name of color profile for document.
     */
    add:(p0:UnitValue, p1:UnitValue, p2:number, p3:string, p4:NewDocumentMode, p5:DocumentFill, p6:number, p7:BitsPerChannelType, p8:string)=> Document;
}

/**
 The collection of layer objects, including art layer and layer set objects, in the document.
 */
declare class Layers extends Array {
    parent:Object;				//The collection of layer objects, including art layer and layer set objects, in the document.
    typename:string;				//The collection of layer objects, including art layer and layer set objects, in the document.
    length:number;				//The collection of layer objects, including art layer and layer set objects, in the document.


    /**
     * The collection of layer objects, including art layer and layer set objects, in the document.
     */
    removeAll:()=> void;

    /**
     * The collection of layer objects, including art layer and layer set objects, in the document.
     * @param p0 string undefined
     */
    getByName:(p0:string)=> Layer;
}

/**
 The collection of layer set objects in the document.
 */
declare class LayerSets extends Array {
    parent:Object;				//The collection of layer set objects in the document.
    typename:string;				//The collection of layer set objects in the document.
    length:number;				//The collection of layer set objects in the document.


    /**
     * The collection of layer set objects in the document.
     */
    add:()=> LayerSet;

    /**
     * The collection of layer set objects in the document.
     */
    removeAll:()=> void;

    /**
     * The collection of layer set objects in the document.
     * @param p0 string undefined
     */
    getByName:(p0:string)=> LayerSet;
}

/**
 The collection of art layer objects in the document.
 */
declare class ArtLayers extends Array {
    parent:Object;				//The collection of art layer objects in the document.
    typename:string;				//The collection of art layer objects in the document.
    length:number;				//The collection of art layer objects in the document.


    /**
     * The collection of art layer objects in the document.
     */
    add:()=> ArtLayer;

    /**
     * The collection of art layer objects in the document.
     */
    removeAll:()=> void;

    /**
     * The collection of art layer objects in the document.
     * @param p0 string undefined
     */
    getByName:(p0:string)=> ArtLayer;
}

/**
 The collection of channel objects in the document.
 */
declare class Channels extends Array {
    parent:Object;				//The collection of channel objects in the document.
    typename:string;				//The collection of channel objects in the document.
    length:number;				//The collection of channel objects in the document.


    /**
     * The collection of channel objects in the document.
     */
    add:()=> Channel;

    /**
     * The collection of channel objects in the document.
     */
    removeAll:()=> void;

    /**
     * The collection of channel objects in the document.
     * @param p0 string undefined
     */
    getByName:(p0:string)=> Channel;
}

/**
 Guides associated with the document.
 */
declare class Guides {


    /**
     * Guides associated with the document.
     * @param p0 Direction Indicates whether the guide is vertical or horizontal.,
     * @param p1 UnitValue Location of the guide from origin of image.
     */
    add:(p0:Direction, p1:UnitValue)=> Guide;
}

/**
 The history state objects associated with the document.
 */
declare class HistoryStates extends Array {
    parent:Object;				//The history state objects associated with the document.
    typename:string;				//The history state objects associated with the document.
    length:number;				//The history state objects associated with the document.


    /**
     * The history state objects associated with the document.
     * @param p0 string undefined
     */
    getByName:(p0:string)=> HistoryState;
}

/**
 The layer comp objects associated with the document.
 */
declare class LayerComps {


    /**
     * The layer comp objects associated with the document.
     * @param p0 string The name of the layer comp.,
     * @param p1 string The description of the layer comp.,
     * @param p2 boolean If true, uses the layer appearance or style for this layer comp.,
     * @param p3 boolean If true, uses the layer position for this layer comp.,
     * @param p4 boolean If true, uses the layer visibility for this layer comp.
     */
    add:(p0:string, p1:string, p2:boolean, p3:boolean, p4:boolean)=> LayerComp;
}

/**
 A collection of fonts available on your computer.
 */
declare class TextFonts extends Array {
    parent:Object;				//A collection of fonts available on your computer.
    typename:string;				//A collection of fonts available on your computer.
    length:number;				//A collection of fonts available on your computer.


    /**
     * A collection of fonts available on your computer.
     * @param p0 string undefined
     */
    getByName:(p0:string)=> TextFont;
}

/**
 The collection of path item objects in the document.
 */
declare class PathItems {


    /**
     * The collection of path item objects in the document.
     * @param p0 string The name for the new path.,
     * @param p1 SubPathInfo The item's sub paths.
     */
    add:(p0:string, p1:SubPathInfo)=> PathItem;
}

/**
 An array of path point info objects that describes a straight or curved segment of a path. You do not use the sub path item object to create a sub path. Rather, you use the sub path item object to retrieve information about a sub path. To create sub paths, see sub path info.
 */
declare class SubPathItems extends Array {
    parent:Object;				//An array of path point info objects that describes a straight or curved segment of a path. You do not use the sub path item object to create a sub path. Rather, you use the sub path item object to retrieve information about a sub path. To create sub paths, see sub path info.
    typename:string;				//An array of path point info objects that describes a straight or curved segment of a path. You do not use the sub path item object to create a sub path. Rather, you use the sub path item object to retrieve information about a sub path. To create sub paths, see sub path info.
    length:number;				//An array of path point info objects that describes a straight or curved segment of a path. You do not use the sub path item object to create a sub path. Rather, you use the sub path item object to retrieve information about a sub path. To create sub paths, see sub path info.


    /**
     * An array of path point info objects that describes a straight or curved segment of a path. You do not use the sub path item object to create a sub path. Rather, you use the sub path item object to retrieve information about a sub path. To create sub paths, see sub path info.
     * @param p0 string undefined
     */
    getByName:(p0:string)=> SubPathItem;
}

/**
 A collection of path point objects that comprises the path points property of the sub path item object.
 */
declare class PathPoints extends Array {
    parent:Object;				//A collection of path point objects that comprises the path points property of the sub path item object.
    typename:string;				//A collection of path point objects that comprises the path points property of the sub path item object.
    length:number;				//A collection of path point objects that comprises the path points property of the sub path item object.


    /**
     * A collection of path point objects that comprises the path points property of the sub path item object.
     * @param p0 string undefined
     */
    getByName:(p0:string)=> PathPoint;
}

/**
 A collection of notifier objects in the document.
 */
declare class Notifiers {


    /**
     * A collection of notifier objects in the document.
     * @param p0 string The class id of the event, four characters or a unique string.,
     * @param p1 File The script file to execute when the event occurs.,
     * @param p2 string The class of the object the event is applied to, four characters or a unique string. When an event applies to multiple types of objects, you use the event class parameter to distinguish which object this Notifier applies to. For example, the Make event (“Mk“) applies to documents (“Dcmn”), channels (“Chnl”) and other objects.
     */
    add:(p0:string, p1:File, p2:string)=> Notifier;

    /**
     * A collection of notifier objects in the document.
     */
    removeAll:()=> void;
}

/**
 The collection of count items in the document.
 */
declare class CountItems {


    /**
     * The collection of count items in the document.
     * @param p0 UnitPoint The position of origin.
     */
    add:(p0:UnitPoint)=> CountItem;
}

/**
 The collection of color samplers in the document.
 */
declare class ColorSamplers {


    /**
     * The collection of color samplers in the document.
     * @param p0 UnitPoint The horizontal and vertical (x,y) locations, respectively, of the color sampler.
     */
    add:(p0:UnitPoint)=> ColorSampler;

    removeAll:()=>void;
}

/**
 Options that can be specified when opening a document.
 */
declare class OpenOptions {

}

/**
 DEPRECATED.
 */
declare class PhotoCDOpenOptions extends OpenOptions {
    pixelSize:PhotoCDSize;				//DEPRECATED.
    colorProfileName:string;				//DEPRECATED.
    resolution:number;				//DEPRECATED.
    colorSpace:PhotoCDColorSpace;				//DEPRECATED.
    orientation:Orientation;				//DEPRECATED.

}

/**
 Options that can be specified when opening a document in RAW format.
 */
declare class RawFormatOpenOptions extends OpenOptions {
    height:number;				//Options that can be specified when opening a document in RAW format.
    width:number;				//Options that can be specified when opening a document in RAW format.
    channelNumber:number;				//Options that can be specified when opening a document in RAW format.
    interleaveChannels:boolean;				//Options that can be specified when opening a document in RAW format.
    bitsPerChannel:number;				//Options that can be specified when opening a document in RAW format.
    byteOrder:ByteOrderType;				//Options that can be specified when opening a document in RAW format.
    headerSize:number;				//Options that can be specified when opening a document in RAW format.
    retainHeader:boolean;				//Options that can be specified when opening a document in RAW format.

}

/**
 Options that can be specified when opening a generic PDF document.
 */
declare class GenericPDFOpenOptions extends OpenOptions {
    resolution:number;				//Options that can be specified when opening a generic PDF document.
    mode:OpenDocumentMode;				//Options that can be specified when opening a generic PDF document.
    antiAlias:boolean;				//Options that can be specified when opening a generic PDF document.
    page:number;				//Options that can be specified when opening a generic PDF document.
    constrainProportions:boolean;				//Options that can be specified when opening a generic PDF document.
    height:UnitValue;				//Options that can be specified when opening a generic PDF document.
    width:UnitValue;				//Options that can be specified when opening a generic PDF document.
    bitsPerChannel:BitsPerChannelType;				//Options that can be specified when opening a generic PDF document.
    usePageNumber:boolean;				//Options that can be specified when opening a generic PDF document.
    name:string;				//Options that can be specified when opening a generic PDF document.
    cropPage:CropToType;				//Options that can be specified when opening a generic PDF document.
    suppressWarnings:boolean;				//Options that can be specified when opening a generic PDF document.

}

/**
 Options that can be specified when opening a generic EPS document.
 */
declare class GenericEPSOpenOptions extends OpenOptions {
    height:UnitValue;				//Options that can be specified when opening a generic EPS document.
    width:UnitValue;				//Options that can be specified when opening a generic EPS document.
    resolution:number;				//Options that can be specified when opening a generic EPS document.
    mode:OpenDocumentMode;				//Options that can be specified when opening a generic EPS document.
    antiAlias:boolean;				//Options that can be specified when opening a generic EPS document.
    constrainProportions:boolean;				//Options that can be specified when opening a generic EPS document.

}

/**
 Options for opening a DICOM document.
 */
declare class DICOMOpenOptions extends OpenOptions {
    anonymize:boolean;				//Options for opening a DICOM document.
    showOverlays:boolean;				//Options for opening a DICOM document.
    rows:number;				//Options for opening a DICOM document.
    columns:number;				//Options for opening a DICOM document.
    windowWidth:number;				//Options for opening a DICOM document.
    windowLevel:number;				//Options for opening a DICOM document.
    reverse:boolean;				//Options for opening a DICOM document.

}

/**
 Options for opening a camera RAW document.
 */
declare class CameraRAWOpenOptions extends OpenOptions {
    colorSpace:ColorSpaceType;				//Options for opening a camera RAW document.
    bitsPerChannel:BitsPerChannelType;				//Options for opening a camera RAW document.
    size:CameraRAWSize;				//Options for opening a camera RAW document.
    resolution:number;				//Options for opening a camera RAW document.
    settings:CameraRAWSettingsType;				//Options for opening a camera RAW document.
    whiteBalance:WhiteBalanceType;				//Options for opening a camera RAW document.
    temperature:number;				//Options for opening a camera RAW document.
    tint:number;				//Options for opening a camera RAW document.
    exposure:number;				//Options for opening a camera RAW document.
    shadows:number;				//Options for opening a camera RAW document.
    brightness:number;				//Options for opening a camera RAW document.
    contrast:number;				//Options for opening a camera RAW document.
    saturation:number;				//Options for opening a camera RAW document.
    sharpness:number;				//Options for opening a camera RAW document.
    luminanceSmoothing:number;				//Options for opening a camera RAW document.
    colorNoiseReduction:number;				//Options for opening a camera RAW document.
    chromaticAberrationRC:number;				//Options for opening a camera RAW document.
    chromaticAberrationBY:number;				//Options for opening a camera RAW document.
    vignettingAmount:number;				//Options for opening a camera RAW document.
    vignettingMidpoint:number;				//Options for opening a camera RAW document.
    shadowTint:number;				//Options for opening a camera RAW document.
    redHue:number;				//Options for opening a camera RAW document.
    redSaturation:number;				//Options for opening a camera RAW document.
    greenHue:number;				//Options for opening a camera RAW document.
    greenSaturation:number;				//Options for opening a camera RAW document.
    blueHue:number;				//Options for opening a camera RAW document.
    blueSaturation:number;				//Options for opening a camera RAW document.

}

/**
 Options for saving a file.
 */
declare class SaveOptions {
    static SAVECHANGES:SaveOptionsType;
    static DONOTSAVECHANGES:SaveOptionsType;
    static PROMPTTOSAVECHANGES:SaveOptionsType;
}

/**
 Options for saving a Photoshop document.
 */
declare class PhotoshopSaveOptions extends SaveOptions {
    alphaChannels:boolean;				//Options for saving a Photoshop document.
    layers:boolean;				//Options for saving a Photoshop document.
    annotations:boolean;				//Options for saving a Photoshop document.
    spotColors:boolean;				//Options for saving a Photoshop document.
    embedColorProfile:boolean;				//Options for saving a Photoshop document.

}

/**
 Options for saving a document in BMP format.
 */
declare class BMPSaveOptions extends SaveOptions {
    alphaChannels:boolean;				//Options for saving a document in BMP format.
    osType:OperatingSystem;				//Options for saving a document in BMP format.
    depth:BMPDepthType;				//Options for saving a document in BMP format.
    rleCompression:boolean;				//Options for saving a document in BMP format.
    flipRowOrder:boolean;				//Options for saving a document in BMP format.

}

/**
 Options for saving a document in GIF format.
 */
declare class GIFSaveOptions extends SaveOptions {
    colors:number;				//Options for saving a document in GIF format.
    dither:DitherType;				//Options for saving a document in GIF format.
    ditherAmount:number;				//Options for saving a document in GIF format.
    forced:ForcedColors;				//Options for saving a document in GIF format.
    interlaced:boolean;				//Options for saving a document in GIF format.
    matte:MatteType;				//Options for saving a document in GIF format.
    palette:PaletteType;				//Options for saving a document in GIF format.
    preserveExactColors:boolean;				//Options for saving a document in GIF format.
    transparency:boolean;				//Options for saving a document in GIF format.

}

/**
 Options for saving a document in EPS format.
 */
declare class EPSSaveOptions extends SaveOptions {
    embedColorProfile:boolean;				//Options for saving a document in EPS format.
    preview:MacPreviewType;				//Options for saving a document in EPS format.
    encoding:SaveEncoding;				//Options for saving a document in EPS format.
    halftoneScreen:boolean;				//Options for saving a document in EPS format.
    transferFunction:boolean;				//Options for saving a document in EPS format.
    psColorManagement:boolean;				//Options for saving a document in EPS format.
    vectorData:boolean;				//Options for saving a document in EPS format.
    interpolation:boolean;				//Options for saving a document in EPS format.
    transparentWhites:boolean;				//Options for saving a document in EPS format.

}

/**
 Options for saving a document in JPEG format.
 */
declare class JPEGSaveOptions extends SaveOptions {
    embedColorProfile:boolean;				//Options for saving a document in JPEG format.
    formatOptions:FormatOptionsType;				//Options for saving a document in JPEG format.
    matte:MatteType;				//Options for saving a document in JPEG format.
    scans:number;				//Options for saving a document in JPEG format.
    quality:number;				//Options for saving a document in JPEG format.

}

/**
 Options for saving a document in PDF format.
 */
declare class PDFSaveOptions extends SaveOptions {
    alphaChannels:boolean;				//Options for saving a document in PDF format.
    layers:boolean;				//Options for saving a document in PDF format.
    annotations:boolean;				//Options for saving a document in PDF format.
    spotColors:boolean;				//Options for saving a document in PDF format.
    embedColorProfile:boolean;				//Options for saving a document in PDF format.
    downgradeColorProfile:boolean;				//Options for saving a document in PDF format.
    transparency:boolean;				//Options for saving a document in PDF format.
    interpolation:boolean;				//Options for saving a document in PDF format.
    vectorData:boolean;				//Options for saving a document in PDF format.
    embedFonts:boolean;				//Options for saving a document in PDF format.
    useOutlines:boolean;				//Options for saving a document in PDF format.
    encoding:PDFEncodingType;				//Options for saving a document in PDF format.
    jpegQuality:number;				//Options for saving a document in PDF format.
    presetFile:string;				//Options for saving a document in PDF format.
    PDFStandard:PDFStandardType;				//Options for saving a document in PDF format.
    PDFCompatibility:PDFCompatibilityType;				//Options for saving a document in PDF format.
    description:string;				//Options for saving a document in PDF format.
    preserveEditing:boolean;				//Options for saving a document in PDF format.
    embedThumbnail:boolean;				//Options for saving a document in PDF format.
    optimizeForWeb:boolean;				//Options for saving a document in PDF format.
    view:boolean;				//Options for saving a document in PDF format.
    downSample:PDFResampleType;				//Options for saving a document in PDF format.
    downSampleSize:number;				//Options for saving a document in PDF format.
    downSampleSizeLimit:number;				//Options for saving a document in PDF format.
    tileSize:number;				//Options for saving a document in PDF format.
    convertToEightBit:boolean;				//Options for saving a document in PDF format.
    colorConversion:boolean;				//Options for saving a document in PDF format.
    destinationProfile:string;				//Options for saving a document in PDF format.
    profileInclusionPolicy:boolean;				//Options for saving a document in PDF format.
    outputCondition:string;				//Options for saving a document in PDF format.
    outputConditionID:string;				//Options for saving a document in PDF format.
    registryName:string;				//Options for saving a document in PDF format.

}

/**
 Options for saving a document in PICT format.
 */
declare class PICTFileSaveOptions extends SaveOptions {
    alphaChannels:boolean;				//Options for saving a document in PICT format.
    embedColorProfile:boolean;				//Options for saving a document in PICT format.
    resolution:PICTBitsPerPixels;				//Options for saving a document in PICT format.
    compression:PICTCompression;				//Options for saving a document in PICT format.

}

/**
 Options for saving a document as a PICT resource file.
 */
declare class PICTResourceSaveOptions extends SaveOptions {
    alphaChannels:boolean;				//Options for saving a document as a PICT resource file.
    embedColorProfile:boolean;				//Options for saving a document as a PICT resource file.
    resolution:PICTBitsPerPixels;				//Options for saving a document as a PICT resource file.
    compression:PICTCompression;				//Options for saving a document as a PICT resource file.
    resourceID:number;				//Options for saving a document as a PICT resource file.
    name:string;				//Options for saving a document as a PICT resource file.

}

/**
 Options for saving a document in Pixar format.
 */
declare class PixarSaveOptions extends SaveOptions {
    alphaChannels:boolean;				//Options for saving a document in Pixar format.

}

/**
 Options for saving a document in PNG format.
 */
declare class PNGSaveOptions extends SaveOptions {
    interlaced:boolean;				//Options for saving a document in PNG format.
    compression:number;				//Options for saving a document in PNG format.

}

/**
 Options for saving a document in RAW format.
 */
declare class RawSaveOptions extends SaveOptions {
    alphaChannels:boolean;				//Options for saving a document in RAW format.
    spotColors:boolean;				//Options for saving a document in RAW format.

}

/**
 Options for saving a document in SGI RGB format.
 */
declare class SGIRGBSaveOptions extends SaveOptions {
    alphaChannels:boolean;				//Options for saving a document in SGI RGB format.
    spotColors:boolean;				//Options for saving a document in SGI RGB format.

}

/**
 Options for saving a document in TGA (Targa) format.
 */
declare class TargaSaveOptions extends SaveOptions {
    resolution:TargaBitsPerPixels;				//Options for saving a document in TGA (Targa) format.
    rleCompression:boolean;				//Options for saving a document in TGA (Targa) format.
    alphaChannels:boolean;				//Options for saving a document in TGA (Targa) format.

}

/**
 Options for saving a document in TIFF format.
 */
declare class TiffSaveOptions extends SaveOptions {
    alphaChannels:boolean;				//Options for saving a document in TIFF format.
    layers:boolean;				//Options for saving a document in TIFF format.
    annotations:boolean;				//Options for saving a document in TIFF format.
    spotColors:boolean;				//Options for saving a document in TIFF format.
    embedColorProfile:boolean;				//Options for saving a document in TIFF format.
    imageCompression:TiffEncodingType;				//Options for saving a document in TIFF format.
    jpegQuality:number;				//Options for saving a document in TIFF format.
    byteOrder:ByteOrderType;				//Options for saving a document in TIFF format.
    saveImagePyramid:boolean;				//Options for saving a document in TIFF format.
    transparency:boolean;				//Options for saving a document in TIFF format.
    layerCompression:LayerCompressionType;				//Options for saving a document in TIFF format.
    interleaveChannels:boolean;				//Options for saving a document in TIFF format.

}

/**
 Options for saving a document in Photoshop DCS 1.0 format.
 */
declare class DCS1_SaveOptions extends SaveOptions {
    embedColorProfile:boolean;				//Options for saving a document in Photoshop DCS 1.0 format.
    preview:MacPreviewType;				//Options for saving a document in Photoshop DCS 1.0 format.
    DCS:DCSType;				//Options for saving a document in Photoshop DCS 1.0 format.
    encoding:SaveEncoding;				//Options for saving a document in Photoshop DCS 1.0 format.
    halftoneScreen:boolean;				//Options for saving a document in Photoshop DCS 1.0 format.
    transferFunction:boolean;				//Options for saving a document in Photoshop DCS 1.0 format.
    vectorData:boolean;				//Options for saving a document in Photoshop DCS 1.0 format.
    interpolation:boolean;				//Options for saving a document in Photoshop DCS 1.0 format.

}

/**
 Options for saving a document in Photoshop DCS 2.0 format.
 */
declare class DCS2_SaveOptions extends SaveOptions {
    spotColors:boolean;				//Options for saving a document in Photoshop DCS 2.0 format.
    embedColorProfile:boolean;				//Options for saving a document in Photoshop DCS 2.0 format.
    preview:MacPreviewType;				//Options for saving a document in Photoshop DCS 2.0 format.
    DCS:DCSType;				//Options for saving a document in Photoshop DCS 2.0 format.
    multiFileDCS:boolean;				//Options for saving a document in Photoshop DCS 2.0 format.
    encoding:SaveEncoding;				//Options for saving a document in Photoshop DCS 2.0 format.
    halftoneScreen:boolean;				//Options for saving a document in Photoshop DCS 2.0 format.
    transferFunction:boolean;				//Options for saving a document in Photoshop DCS 2.0 format.
    vectorData:boolean;				//Options for saving a document in Photoshop DCS 2.0 format.
    interpolation:boolean;				//Options for saving a document in Photoshop DCS 2.0 format.

}

/**
 Options for exporting an object.
 */
declare class ExportOptions {

}

/**
 Options for exporting Illustrator paths.
 */
declare class ExportOptionsIllustrator extends ExportOptions {
    path:IllustratorPathType;				//Options for exporting Illustrator paths.
    pathName:string;				//Options for exporting Illustrator paths.

}

/**
 Options for exporting Save For Web files.
 */
declare class ExportOptionsSaveForWeb extends ExportOptions {
    format:SaveDocumentType;				//Options for exporting Save For Web files.
    PNG8:boolean;				//Options for exporting Save For Web files.
    lossy:number;				//Options for exporting Save For Web files.
    colorReduction:ColorReductionType;				//Options for exporting Save For Web files.
    colors:number;				//Options for exporting Save For Web files.
    dither:DitherType;				//Options for exporting Save For Web files.
    ditherAmount:number;				//Options for exporting Save For Web files.
    transparency:boolean;				//Options for exporting Save For Web files.
    transparencyDither:DitherType;				//Options for exporting Save For Web files.
    transparencyAmount:number;				//Options for exporting Save For Web files.
    interlaced:boolean;				//Options for exporting Save For Web files.
    matteColor:RGBColor;				//Options for exporting Save For Web files.
    webSnap:number;				//Options for exporting Save For Web files.
    optimized:boolean;				//Options for exporting Save For Web files.
    quality:number;				//Options for exporting Save For Web files.
    includeProfile:boolean;				//Options for exporting Save For Web files.
    blur:number;				//Options for exporting Save For Web files.

}

/**
 Options for converting documents.
 */
declare class DocumentConversionOptions {

}

/**
 Options for changing the document mode to Bitmap.
 */
declare class BitmapConversionOptions extends DocumentConversionOptions {
    resolution:number;				//Options for changing the document mode to Bitmap.
    method:BitmapConversionType;				//Options for changing the document mode to Bitmap.
    patternName:string;				//Options for changing the document mode to Bitmap.
    frequency:number;				//Options for changing the document mode to Bitmap.
    angle:number;				//Options for changing the document mode to Bitmap.
    shape:BitmapHalfToneType;				//Options for changing the document mode to Bitmap.

}

/**
 Options for converting an RGB image to an indexed color model.
 */
declare class IndexedConversionOptions extends DocumentConversionOptions {
    palette:PaletteType;				//Options for converting an RGB image to an indexed color model.
    colors:number;				//Options for converting an RGB image to an indexed color model.
    forced:ForcedColors;				//Options for converting an RGB image to an indexed color model.
    transparency:boolean;				//Options for converting an RGB image to an indexed color model.
    dither:DitherType;				//Options for converting an RGB image to an indexed color model.
    ditherAmount:number;				//Options for converting an RGB image to an indexed color model.
    preserveExactColors:boolean;				//Options for converting an RGB image to an indexed color model.
    matte:MatteType;				//Options for converting an RGB image to an indexed color model.

}

/**
 A color value.
 */
declare class Color {

}

/**
 A color definition used in the document.
 */
declare class SolidColor {
    model:ColorModel;				//A color definition used in the document.
    rgb:RGBColor;				//A color definition used in the document.
    gray:GrayColor;				//A color definition used in the document.
    cmyk:CMYKColor;				//A color definition used in the document.
    lab:LabColor;				//A color definition used in the document.
    hsb:HSBColor;				//A color definition used in the document.
    nearestWebColor:RGBColor;				//A color definition used in the document.

}

/**
 Options for defining a gray color.
 */
declare class GrayColor extends Color {
    gray:number;				//Options for defining a gray color.

}

/**
 The definition of an RGB color mode.
 */
declare class RGBColor extends Color {
    red:number;				//The definition of an RGB color mode.
    green:number;				//The definition of an RGB color mode.
    blue:number;				//The definition of an RGB color mode.
    hexValue:string;				//The definition of an RGB color mode.

}

/**
 A CMYK color specification.
 */
declare class CMYKColor extends Color {
    cyan:number;				//A CMYK color specification.
    magenta:number;				//A CMYK color specification.
    yellow:number;				//A CMYK color specification.
    black:number;				//A CMYK color specification.

}

/**
 A Lab color specification.
 */
declare class LabColor extends Color {
    L:number;				//A Lab color specification.
    A:number;				//A Lab color specification.
    B:number;				//A Lab color specification.

}

/**
 An HSB color specification.
 */
declare class HSBColor extends Color {
    hue:number;				//An HSB color specification.
    saturation:number;				//An HSB color specification.
    brightness:number;				//An HSB color specification.

}

/**
 Represents a missing color.
 */
declare class NoColor extends Color {

}

/**
 Options for the PDF presentation command.
 */
declare class PresentationOptions {
    presentation:boolean;				//Options for the PDF presentation command.
    autoAdvance:boolean;				//Options for the PDF presentation command.
    interval:number;				//Options for the PDF presentation command.
    loop:boolean;				//Options for the PDF presentation command.
    transition:TransitionType;				//Options for the PDF presentation command.
    magnification:MagnificationType;				//Options for the PDF presentation command.
    includeFilename:boolean;				//Options for the PDF presentation command.
    PDFFileOptions:PDFSaveOptions;				//Options for the PDF presentation command.

}

/**
 Deprecated, the make photo gallery method has moved to Bridge.
 */
declare class GalleryOptions {
    layoutStyle:string;				//Deprecated, the make photo gallery method has moved to Bridge.
    emailAddress:string;				//Deprecated, the make photo gallery method has moved to Bridge.
    useShortExtension:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    useUTF8Encoding:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    includeSubFolders:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    addSizeAttributes:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    preserveAllMetadata:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    bannerOptions:GalleryBannerOptions;				//Deprecated, the make photo gallery method has moved to Bridge.
    imagesOptions:GalleryImagesOptions;				//Deprecated, the make photo gallery method has moved to Bridge.
    thumbnailOptions:GalleryThumbnailOptions;				//Deprecated, the make photo gallery method has moved to Bridge.
    customColorOptions:GalleryCustomColorOptions;				//Deprecated, the make photo gallery method has moved to Bridge.
    securityOptions:GallerySecurityOptions;				//Deprecated, the make photo gallery method has moved to Bridge.

}

/**
 Deprecated, the make photo gallery method has moved to Bridge.
 */
declare class GalleryBannerOptions {
    siteName:string;				//Deprecated, the make photo gallery method has moved to Bridge.
    photographer:string;				//Deprecated, the make photo gallery method has moved to Bridge.
    contactInfo:string;				//Deprecated, the make photo gallery method has moved to Bridge.
    date:string;				//Deprecated, the make photo gallery method has moved to Bridge.
    font:GalleryFontType;				//Deprecated, the make photo gallery method has moved to Bridge.
    fontSize:number;				//Deprecated, the make photo gallery method has moved to Bridge.

}

/**
 Deprecated, the make photo gallery method has moved to Bridge.
 */
declare class GalleryImagesOptions {
    numericLinks:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    resizeImages:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    dimension:number;				//Deprecated, the make photo gallery method has moved to Bridge.
    resizeConstraint:GalleryConstrainType;				//Deprecated, the make photo gallery method has moved to Bridge.
    imageQuality:number;				//Deprecated, the make photo gallery method has moved to Bridge.
    border:number;				//Deprecated, the make photo gallery method has moved to Bridge.
    includeFilename:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    caption:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    includeCredits:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    includeTitle:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    includeCopyright:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    font:GalleryFontType;				//Deprecated, the make photo gallery method has moved to Bridge.
    fontSize:number;				//Deprecated, the make photo gallery method has moved to Bridge.

}

/**
 Deprecated, the make photo gallery method has moved to Bridge.
 */
declare class GalleryThumbnailOptions {
    includeFilename:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    caption:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    includeCredits:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    includeTitle:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    includeCopyright:boolean;				//Deprecated, the make photo gallery method has moved to Bridge.
    font:GalleryFontType;				//Deprecated, the make photo gallery method has moved to Bridge.
    fontSize:number;				//Deprecated, the make photo gallery method has moved to Bridge.
    size:GalleryThumbSizeType;				//Deprecated, the make photo gallery method has moved to Bridge.
    dimension:number;				//Deprecated, the make photo gallery method has moved to Bridge.
    columnCount:number;				//Deprecated, the make photo gallery method has moved to Bridge.
    rowCount:number;				//Deprecated, the make photo gallery method has moved to Bridge.
    border:number;				//Deprecated, the make photo gallery method has moved to Bridge.

}

/**
 Deprecated, the make photo gallery method has moved to Bridge.
 */
declare class GalleryCustomColorOptions {
    backgroundColor:RGBColor;				//Deprecated, the make photo gallery method has moved to Bridge.
    bannerColor:RGBColor;				//Deprecated, the make photo gallery method has moved to Bridge.
    textColor:RGBColor;				//Deprecated, the make photo gallery method has moved to Bridge.
    activeLinkColor:RGBColor;				//Deprecated, the make photo gallery method has moved to Bridge.
    linkColor:RGBColor;				//Deprecated, the make photo gallery method has moved to Bridge.
    visitedLinkColor:RGBColor;				//Deprecated, the make photo gallery method has moved to Bridge.

}

/**
 Deprecated, the make photo gallery method has moved to Bridge.
 */
declare class GallerySecurityOptions {
    content:GallerySecurityType;				//Deprecated, the make photo gallery method has moved to Bridge.
    text:string;				//Deprecated, the make photo gallery method has moved to Bridge.
    font:GalleryFontType;				//Deprecated, the make photo gallery method has moved to Bridge.
    fontSize:number;				//Deprecated, the make photo gallery method has moved to Bridge.
    textColor:RGBColor;				//Deprecated, the make photo gallery method has moved to Bridge.
    opacity:number;				//Deprecated, the make photo gallery method has moved to Bridge.
    textPosition:GallerySecurityTextPositionType;				//Deprecated, the make photo gallery method has moved to Bridge.
    textRotate:GallerySecurityTextRotateType;				//Deprecated, the make photo gallery method has moved to Bridge.

}

/**
 Options that can be specified for a contact sheet.
 */
declare class ContactSheetOptions {
    width:number;				//Options that can be specified for a contact sheet.
    height:number;				//Options that can be specified for a contact sheet.
    resolution:number;				//Options that can be specified for a contact sheet.
    mode:NewDocumentMode;				//Options that can be specified for a contact sheet.
    flatten:boolean;				//Options that can be specified for a contact sheet.
    acrossFirst:boolean;				//Options that can be specified for a contact sheet.
    useAutoSpacing:boolean;				//Options that can be specified for a contact sheet.
    columnCount:number;				//Options that can be specified for a contact sheet.
    rowCount:number;				//Options that can be specified for a contact sheet.
    vertical:number;				//Options that can be specified for a contact sheet.
    horizontal:number;				//Options that can be specified for a contact sheet.
    bestFit:boolean;				//Options that can be specified for a contact sheet.
    caption:boolean;				//Options that can be specified for a contact sheet.
    font:GalleryFontType;				//Options that can be specified for a contact sheet.
    fontSize:number;				//Options that can be specified for a contact sheet.

}

/**
 Options that can be specified for a Picture Package.
 */
declare class PicturePackageOptions {
    layout:string;				//Options that can be specified for a Picture Package.
    resolution:number;				//Options that can be specified for a Picture Package.
    mode:NewDocumentMode;				//Options that can be specified for a Picture Package.
    flatten:boolean;				//Options that can be specified for a Picture Package.
    content:PicturePackageTextType;				//Options that can be specified for a Picture Package.
    text:string;				//Options that can be specified for a Picture Package.
    font:GalleryFontType;				//Options that can be specified for a Picture Package.
    fontSize:number;				//Options that can be specified for a Picture Package.
    opacity:number;				//Options that can be specified for a Picture Package.
    textColor:RGBColor;				//Options that can be specified for a Picture Package.
    textPosition:GallerySecurityTextPositionType;				//Options that can be specified for a Picture Package.
    textRotate:GallerySecurityTextRotateType;				//Options that can be specified for a Picture Package.

}

/**
 Options to specify when running a Batch command.
 */
declare class BatchOptions {
    overrideOpen:boolean;				//Options to specify when running a Batch command.
    suppressOpen:boolean;				//Options to specify when running a Batch command.
    suppressProfile:boolean;				//Options to specify when running a Batch command.
    destination:BatchDestinationType;				//Options to specify when running a Batch command.
    destinationFolder:File;				//Options to specify when running a Batch command.
    overrideSave:boolean;				//Options to specify when running a Batch command.
    fileNaming:FileNamingType;				//Options to specify when running a Batch command.
    startingSerial:number;				//Options to specify when running a Batch command.
    windowsCompatible:boolean;				//Options to specify when running a Batch command.
    macintoshCompatible:boolean;				//Options to specify when running a Batch command.
    unixCompatible:boolean;				//Options to specify when running a Batch command.
    errorFile:File;				//Options to specify when running a Batch command.

}

/**
 An array of path point info objects that describes a straight or curved segment of a path.
 */
declare class SubPathInfo {
    operation:ShapeOperation;				//An array of path point info objects that describes a straight or curved segment of a path.
    closed:boolean;				//An array of path point info objects that describes a straight or curved segment of a path.
    entireSubPath:PathPointInfo;				//An array of path point info objects that describes a straight or curved segment of a path.

}

/**
 A point on a path, expressed as an array of three coordinate arrays: the anchor point, left direction point, and right direction point. For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved segements, the coordinates are different. The difference between the anchor point and the left or right direction points determines the arc of the curve. You use the left direction point to bend the curve "outward" or make it convex; you use the right direction point to bend the curve "inward" or make it concave.
 */
declare class PathPointInfo {
    anchor:Point;				//A point on a path, expressed as an array of three coordinate arrays: the anchor point, left direction point, and right direction point. For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved segements, the coordinates are different. The difference between the anchor point and the left or right direction points determines the arc of the curve. You use the left direction point to bend the curve "outward" or make it convex; you use the right direction point to bend the curve "inward" or make it concave.
    leftDirection:Point;				//A point on a path, expressed as an array of three coordinate arrays: the anchor point, left direction point, and right direction point. For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved segements, the coordinates are different. The difference between the anchor point and the left or right direction points determines the arc of the curve. You use the left direction point to bend the curve "outward" or make it convex; you use the right direction point to bend the curve "inward" or make it concave.
    rightDirection:Point;				//A point on a path, expressed as an array of three coordinate arrays: the anchor point, left direction point, and right direction point. For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved segements, the coordinates are different. The difference between the anchor point and the left or right direction points determines the arc of the curve. You use the left direction point to bend the curve "outward" or make it convex; you use the right direction point to bend the curve "inward" or make it concave.
    kind:PointKind;				//A point on a path, expressed as an array of three coordinate arrays: the anchor point, left direction point, and right direction point. For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved segements, the coordinates are different. The difference between the anchor point and the left or right direction points determines the arc of the curve. You use the left direction point to bend the curve "outward" or make it convex; you use the right direction point to bend the curve "inward" or make it concave.

}

/**
 A record of key-value pairs for actions, such as those included on the Adobe Photoshop Actions menu. The ActionDescriptor class is part of the Action Manager functionality. For more details on the Action Manager, see the Photoshop Scripting Guide.
 */
declare class ActionDescriptor {
    count:number;				//A record of key-value pairs for actions, such as those included on the Adobe Photoshop Actions menu. The ActionDescriptor class is part of the Action Manager functionality. For more details on the Action Manager, see the Photoshop Scripting Guide.

    putList(number:number, list:ActionList);

    putBoolean(number:number, b:boolean);

    putReference(number:number, m_Ref01:ActionReference);
    
    putEnumerated(id246:number, id247:number, id248:number);

    putString(number:number, name:any);

    putObject(number:number, number2:number, m_Dsc02:ActionDescriptor);

    putInteger(number:number, number2:number);
}

/**
 The list of commands that comprise an Action (such as an Action created using the Actions palette in the Adobe Photoshop application). The action list object is part of the Action Manager functionality. For details on using the Action Manager, see the Photoshop Scripting Guide.
 */
declare class ActionList {
    count:number;				//The list of commands that comprise an Action (such as an Action created using the Actions palette in the Adobe Photoshop application). The action list object is part of the Action Manager functionality. For details on using the Action Manager, see the Photoshop Scripting Guide.

    putReference(ref:ActionReference);
}

/**
 Contains data describing a referenced Action. The action reference object is part of the Action Manager functionality. For details on using the Action Manager, see the Photoshop Scripting Guide.
 */
declare class ActionReference {
    putEnumerated(any:any, any2:any, any3:any);

    putIndex(id241:number, layerIndexOrName:any);
    putName(id241:number, layerIndexOrName:any);

    putClass(number:number);

    putIdentifier(number:number, number2:Number);

    putProperty(idChnl:number, idfsel:number);
}
declare function charIDToTypeID(str:string):number;
declare function stringIDToTypeID(str:string):number;
declare function typeIDToStringID(key:number):number;
declare function executeActionGet(ref:ActionReference);
declare function executeAction(number:number, desc:ActionDescriptor, NO:DialogModes);
type TypeID = 'Lyr ' | 'Ordn' | 'Trgt' | 'null' | 'TglO' | 'Shw ' | 'MkVs' | 'slct';

/**
 The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
 */
declare class Application {
    parent:Object;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    typename:string;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    colorSettings:any;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    activeDocument:Document;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    name:string;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    path:File;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    preferences:Preferences;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    scriptingVersion:string;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    freeMemory:number;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    version:string;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    displayDialogs:DialogModes;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    foregroundColor:SolidColor;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    backgroundColor:SolidColor;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    playbackParameters:ActionDescriptor;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    playbackDisplayDialogs:DialogModes;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    notifiersEnabled:boolean;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    windowsFileTypes:string;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    macintoshFileTypes:string;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    preferencesFolder:File;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    locale:string;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    documents:Documents;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    fonts:TextFonts;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    notifiers:Notifiers;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    scriptingBuildDate:string;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    recentFiles:FileArray;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    build:string;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    systemInformation:string;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
    measurementLog:MeasurementLog;				//The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.


    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     */
    togglePalettes:()=> void;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 string The name of the action to play. (Note that the action name is case-sensitive and must match the name as it appears in the Actions palette.),
     * @param p1 string The name of the action set containing the action being played. (Note that the Action Set name is case-sensitive and must match the name as it appears in the Actions palette.)
     */
    doAction:(p0:string, p1:string)=> void;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 File The document to load.
     */
    load:(p0:File)=> void;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 File The document(s) to opend.,
     * @param p1 any The document type (The default is to let Photoshop deduce the format).,
     * @param p2 boolean Creates a smart object around the document.
     */
    open:(p0:File, p1?:any, p2?:boolean)=> Document;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 PurgeTarget The caches to purge.
     */
    purge:(p0:PurgeTarget)=> void;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 any Folder to process or an array of files to process.,
     * @param p1 File Location for output files.,
     * @param p2 GalleryOptions Options for the web photo gallery.
     */
    makePhotoGallery:(p0:any, p1:File, p2:GalleryOptions)=> string;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 AliasArray The input files to include in the presentation.,
     * @param p1 File The location of the output file.,
     * @param p2 PresentationOptions Options for the PDF presentation.
     */
    makePDFPresentation:(p0:AliasArray, p1:File, p2:PresentationOptions)=> string;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 AliasArray List of input files to include.
     */
    makePhotomerge:(p0:AliasArray)=> string;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 AliasArray The files to include.,
     * @param p1 ContactSheetOptions Options for creating the contact sheet.
     */
    makeContactSheet:(p0:AliasArray, p1:ContactSheetOptions)=> string;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 AliasArray The files to include.,
     * @param p1 PicturePackageOptions Options for creating a Picture Package.
     */
    makePicturePackage:(p0:AliasArray, p1:PicturePackageOptions)=> string;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 AliasArray The files to operate on.,
     * @param p1 string The name of the action to play (note that the Action name is case-sensitive and must match the name in the Actions palette).,
     * @param p2 string The name of the action set containing the action being played (note that the Action Set name is case-sensitive and must match the name in the Actions palette).,
     * @param p3 BatchOptions Options for batch automation.
     */
    batch:(p0:AliasArray, p1:string, p2:string, p3:BatchOptions)=> string;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     */
    bringToFront:()=> void;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     */
    refresh:()=> void;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     */
    refreshFonts:()=> void;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 string The unique string ID for the user object.,
     * @param p1 ActionDescriptor The user-defined custom object to save in the registry.,
     * @param p2 boolean If true, the object persists after the script has finished.
     */
    putCustomOptions:(p0:string, p1:ActionDescriptor, p2:boolean)=> void;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 string The unique string ID for the user object.
     */
    getCustomOptions:(p0:string)=> ActionDescriptor;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 string The unique string ID for user object(s) to remove.
     */
    eraseCustomOptions:(p0:string)=> void;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 string The name of the feature.
     */
    featureEnabled:(p0:string)=> boolean;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     */
    openDialog:()=> FileArray;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 number Id of menu to run.
     */
    runMenuItem:(p0:number)=> void;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 string System call string.
     */
    system:(p0:string)=> number;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 number The event to play.,
     * @param p1 ActionDescriptor The action descriptor to play.,
     * @param p2 DialogModes The display permissions for dialogs and alert messages.
     */
    executeAction:(p0:number, p1:ActionDescriptor, p2:DialogModes)=> ActionDescriptor;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 ActionReference The reference specification of the property.
     */
    executeActionGet:(p0:ActionReference)=> ActionDescriptor;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 string The ID to convert.
     */
    stringIDToTypeID:(p0:string)=> number;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 number The ID to convert.
     */
    typeIDToStringID:(p0:number)=> string;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 string The ID to convert.
     */
    charIDToTypeID:(p0:string)=> number;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 number The ID to convert.
     */
    typeIDToCharID:(p0:number)=> string;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     */
    beep:()=> void;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     */
    isQuicktimeAvailable:()=> boolean;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 boolean If true the foreground color is chosen, if false the background color is chosen.
     */
    showColorPicker:(p0:boolean)=> boolean;

    /**
     * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
     * @param p0 File Location for the output files.
     */
    reflectCSAW:(p0:File)=> void;
}

/**
 The active containment object for the layers and all other objects in the script; the basic canvas for the file.
 */
declare interface Document {
    parent:Object;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    typename:string;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    backgroundLayer:ArtLayer;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    bitsPerChannel:BitsPerChannelType;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    colorProfileType:ColorProfileType;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    colorProfileName:string;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    mode:DocumentMode;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    componentChannels:Channel;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    activeHistoryState:HistoryState;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    activeHistoryBrushSource:HistoryState;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    activeLayer:Layer;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    activeChannels:Channel;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    info:DocumentInfo;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    printSettings:DocumentPrintSettings;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    fullName:File;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    height:UnitValue;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    managed:boolean;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    saved:boolean;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    name:string;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    path:File;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    quickMaskMode:boolean;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    resolution:number;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    selection:Selection;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    width:UnitValue;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    histogram:number;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    pixelAspectRatio:number;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    xmpMetadata:XMPMetadata;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    measurementScale:MeasurementScale;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    id:number;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    layers:Layers;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    layerSets:LayerSets;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    artLayers:ArtLayers;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    channels:Channels;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    guides:Guides;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    historyStates:HistoryStates;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    layerComps:LayerComps;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    pathItems:PathItems;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    countItems:CountItems;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.
    colorSamplers:ColorSamplers;				//The active containment object for the layers and all other objects in the script; the basic canvas for the file.


    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 Object undefined,
     * @param p1 ElementPlacement undefined
     */
    duplicate:(p0:Object, p1:ElementPlacement)=> Document;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 SaveOptionsType Specifies whether changes should be saved before closing.
     */
    close:(p0?:SaveOptionsType)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 string The color profile to convert to. Either a string specifying a color profile, one of the working color spaces, or Lab color.,
     * @param p1 Intent The conversion intent.,
     * @param p2 boolean If true, black point compensation is used.,
     * @param p3 boolean If true, dither is used.
     */
    convertProfile:(p0:string, p1:Intent, p2:boolean, p3:boolean)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 ChangeMode The mode to change to.,
     * @param p1 DocumentConversionOptions Options for changing the mode.
     */
    changeMode:(p0:ChangeMode, p1:DocumentConversionOptions)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 UnitRect The area to crop.,
     * @param p1 number The angle of cropping bounds.,
     * @param p2 UnitValue The width of the resulting document.,
     * @param p3 UnitValue The height of the resulting document.
     */
    crop:(p0:UnitRect, p1:number, p2:UnitValue, p3:UnitValue)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 File The file to to.,
     * @param p1 ExportType The type of export.,
     * @param p2 ExportOptions Options for the specified type.
     */
    exportDocument:(p0:File, p1:ExportType, p2:ExportOptions)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 Direction The direction in which to flip the canvas.
     */
    flipCanvas:(p0:Direction)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 File The document to import annotations from.
     */
    importAnnotations:(p0:File)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     */
    flatten:()=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     */
    mergeVisibleLayers:()=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 boolean If true, contents are pasted into the current selection.
     */
    paste:(p0:boolean)=> ArtLayer;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 PrintEncoding The encoding type.,
     * @param p1 SourceSpaceType The color space for the source.,
     * @param p2 string The color space for the printer. Can be "nothing" (meaning same as source); one of the working spaces or Lab color; or a string specifying a color space. Default: nothing.,
     * @param p3 Intent The color conversion intent.,
     * @param p4 boolean If true, black point compensation is used.
     */
    print:(p0:PrintEncoding, p1:SourceSpaceType, p2:string, p3:Intent, p4:boolean)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     */
    printOneCopy:()=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     */
    revealAll:()=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     */
    rasterizeAllLayers:()=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 MeasurementSource The source of the measurements to record.,
     * @param p1 string An array of identifiers of data points to record. Any data points not appropriate for the specified source are ignored.
     */
    recordMeasurements:(p0:MeasurementSource, p1:string)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 number The number of degrees to rotate. A positive angle rotates the canvas clockwise; a negative value rotates the canvas counter-clockwise.
     */
    rotateCanvas:(p0:number)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 UnitValue The desired width of the canvas.,
     * @param p1 UnitValue The desired height of the canvas.,
     * @param p2 AnchorPosition The anchor point to resize around.
     */
    resizeCanvas:(p0:UnitValue, p1:UnitValue, p2:AnchorPosition)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 UnitValue The desired width of the image.,
     * @param p1 UnitValue The desired height of the image.,
     * @param p2 number The resolution (in pixels per inch),
     * @param p3 ResampleMethod The downsample method.,
     * @param p4 number Amount of noise value when using preserve details (range: 0 - 100)
     */
    resizeImage:(p0:UnitValue, p1:UnitValue, p2:number, p3:ResampleMethod, p4:number)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     */
    splitChannels:()=> Document;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     */
    save:()=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 File The file to save to, specified as a string containing the full file path or an alias. If not specified, the document is saved to its existing file.,
     * @param p1 any Options for the specified file type.,
     * @param p2 boolean Saves the document as a copy, leaving the original open.,
     * @param p3 MacExtensionType Appends the specified extension to the file name.
     */
    saveAs:(p0:File, p1:any, p2:boolean, p3:MacExtensionType)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 string The string to use for the history state.,
     * @param p1 string A string of JavaScript code to execute during the suspension of history.
     */
    suspendHistory:(p0:string, p1:string)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 number The trap width in pixels.
     */
    trap:(p0:number)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 TrimType The color or type of pixels to base the trim on.,
     * @param p1 boolean If true, trims away the top of the document.,
     * @param p2 boolean If true, trims away the left of the document.,
     * @param p3 boolean If true, trims away the bottom of the document.,
     * @param p4 boolean If true, trims away the right of the document.
     */
    trim:(p0:TrimType, p1:boolean, p2:boolean, p3:boolean, p4:boolean)=> void;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 string The name of the new document.,
     * @param p1 boolean If ture, duplicates merged layers only.
     */
    // duplicate: (p0: string, p1: boolean)=> Document;

    /**
     * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
     * @param p0 Channel The channel to use for counting.,
     * @param p1 number Threshold to use for counting. Range: 0 to 255.
     */
    autoCount:(p0:Channel, p1:number)=> void;
}

/**
 Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
 */
declare class DocumentInfo {
    parent:Object;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    typename:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    title:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    author:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    authorPosition:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    caption:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    captionWriter:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    jobName:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    copyrighted:CopyrightedType;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    copyrightNotice:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    ownerUrl:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    keywords:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    category:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    supplementalCategories:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    creationDate:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    city:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    provinceState:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    country:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    credit:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    source:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    headline:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    instructions:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    transmissionReference:string;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    urgency:Urgency;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
    exif:any;				//Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.

}

/**
 Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
 */
declare class Preferences {
    parent:Object;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    typename:string;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    colorPicker:ColorPicker;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    interpolation:ResampleMethod;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    exportClipboard:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    showToolTips:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    keyboardZoomResizesWindows:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    autoUpdateOpenDocuments:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    showAsianTextOptions:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    beepWhenDone:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    dynamicColorSliders:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    savePaletteLocations:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    showEnglishFontNames:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    useShiftKeyForToolSwitch:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    textFontSize:FontSize;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    numberOfHistoryStates:number;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    createFirstSnapshot:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    nonLinearHistory:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    smartQuotes:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    imagePreviews:SaveBehavior;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    iconPreview:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    fullSizePreview:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    macOSThumbnail:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    windowsThumbnail:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    appendExtension:SaveBehavior;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    useLowerCaseExtension:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    askBeforeSavingLayeredTIFF:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    maximizeCompatibility:QueryStateType;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    recentFileListLength:number;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    colorChannelsInColor:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    useDiffusionDither:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    pixelDoubling:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    paintingCursors:PaintingCursors;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    otherCursors:OtherPaintingCursors;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    gridSize:GridSize;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    useVideoAlpha:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    gamutWarningOpacity:number;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    rulerUnits:Units;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    typeUnits:TypeUnits;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    columnWidth:number;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    columnGutter:number;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    pointSize:PointType;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    guideStyle:GuideLineStyle;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    gridStyle:GridLineStyle;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    gridSubDivisions:number;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    showSliceNumber:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    useAdditionalPluginFolder:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    additionalPluginFolder:File;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    imageCacheLevels:number;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    imageCacheForHistograms:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    maxRAMuse:number;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    useHistoryLog:boolean;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    saveLogItems:SaveLogItemsType;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    editLogItems:EditLogItemsType;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    saveLogItemsFile:File;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
    fontPreviewSize:FontPreviewType;				//Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.

}

/**
 Print settings for a document.
 */
declare class DocumentPrintSettings {
    parent:Object;				//Print settings for a document.
    typename:string;				//Print settings for a document.
    caption:boolean;				//Print settings for a document.
    labels:boolean;				//Print settings for a document.
    cornerCropMarks:boolean;				//Print settings for a document.
    centerCropMarks:boolean;				//Print settings for a document.
    colorBars:boolean;				//Print settings for a document.
    registrationMarks:boolean;				//Print settings for a document.
    negative:boolean;				//Print settings for a document.
    flip:boolean;				//Print settings for a document.
    interpolate:boolean;				//Print settings for a document.
    vectorData:boolean;				//Print settings for a document.
    backgroundColor:SolidColor;				//Print settings for a document.
    renderIntent:Intent;				//Print settings for a document.
    hardProof:boolean;				//Print settings for a document.
    printSpace:string;				//Print settings for a document.
    mapBlack:boolean;				//Print settings for a document.
    printBorder:UnitValue;				//Print settings for a document.
    bleedWidth:UnitValue;				//Print settings for a document.
    colorHandling:PrintColorHandling;				//Print settings for a document.
    copies:number;				//Print settings for a document.
    docPosition:DocPositionStyle;				//Print settings for a document.
    posY:UnitValue;				//Print settings for a document.
    posX:UnitValue;				//Print settings for a document.
    printerName:string;				//Print settings for a document.
    scale:number;				//Print settings for a document.
    activePrinter:string;				//Print settings for a document.
    printers:string;				//Print settings for a document.


    /**
     * Print settings for a document.
     * @param p0 DocPositionStyle Position of the image on page when printing. Can be centered, scale to fit, or user defined.,
     * @param p1 UnitValue X position of image on page.,
     * @param p2 UnitValue Y position of image on page.,
     * @param p3 number Position of the image on page when printing. Can be centered, scale to fit, or user defined.
     */
    setPagePosition:(p0:DocPositionStyle, p1:UnitValue, p2:UnitValue, p3:number)=> void;
}

/**
 The selected area of the document or layer.
 */
declare interface Selection {
    parent:Object;				//The selected area of the document or layer.
    typename:string;				//The selected area of the document or layer.
    bounds:UnitRect;				//The selected area of the document or layer.
    solid:boolean;				//The selected area of the document or layer.


    /**
     * The selected area of the document or layer.
     */
    clear:()=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 boolean If true the copy includes all visible layers. If false, copies only from the current layer.
     */
    copy:(p0:boolean)=> void;

    /**
     * The selected area of the document or layer.
     */
    cut:()=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 UnitValue The width of the border selection.
     */
    selectBorder:(p0:UnitValue)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 UnitValue The amount to contract the selection.
     */
    contract:(p0:UnitValue)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 any The color or history state with which to fill the object.,
     * @param p1 ColorBlendMode The color blend mode.,
     * @param p2 number The opacity as a percentage. Range: 1 to 100.,
     * @param p3 boolean If true, perserves transparencies.
     */
    fill:(p0:any, p1:ColorBlendMode, p2:number, p3:boolean)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 any The color to stroke the selection with.,
     * @param p1 number The stroke width.,
     * @param p2 StrokeLocation The stroke location.,
     * @param p3 ColorBlendMode The color blend mode.,
     * @param p4 number The opacity of the stroke color as a percentage. Range: 1 to 100.,
     * @param p5 boolean If true, preserves transparency.
     */
    stroke:(p0:any, p1:number, p2:StrokeLocation, p3:ColorBlendMode, p4:number, p5:boolean)=> void;

    /**
     * The selected area of the document or layer.
     */
    selectAll:()=> void;

    /**
     * The selected area of the document or layer.
     */
    deselect:()=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 any Array of x and y coordinates that describe the corners of the selection, in the format [[x1, y1], [x2,y2],[x3, y3], [x4,y4]],
     * @param p1 SelectionType The method for combining the new selection with the existing selection.,
     * @param p2 number The feather amount.,
     * @param p3 boolean If true, anti-aliasing is used.
     */
    select:(p0:Array<Array<UnitValue>>, p1?:SelectionType, p2?:number, p3?:boolean)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 UnitValue The amount to expand the selection.
     */
    expand:(p0:UnitValue)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 UnitValue The amount to feather the edge.
     */
    feather:(p0:UnitValue)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 number The tolerance range. Range: 0 to 255.,
     * @param p1 boolean If true, anti-aliasing is used.
     */
    grow:(p0:number, p1:boolean)=> void;

    /**
     * The selected area of the document or layer.
     */
    invert:()=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 number The tolerance range. Range: 0 to 255.,
     * @param p1 boolean If true, anti-aliasing is used.
     */
    similar:(p0:number, p1:boolean)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 number The sample radius in pixels. Range: 0 to 100.
     */
    smooth:(p0:number)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 Channel The channel to save the selection to.,
     * @param p1 SelectionType How to add the selection to the existing contents of the channel.
     */
    store:(p0:Channel, p1:SelectionType)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 Channel The channel to load the selection from.,
     * @param p1 SelectionType How to combine the channel contents with the existing selection.,
     * @param p2 boolean If true, selects the inverse of the channel contents.
     */
    load:(p0:Channel, p1:SelectionType, p2:boolean)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 UnitValue The amount to move the object horizontally.,
     * @param p1 UnitValue The amount to move the object vertically.
     */
    translate:(p0:UnitValue, p1:UnitValue)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 UnitValue The amount to move the object horizontally.,
     * @param p1 UnitValue The amount to move the object vertically.
     */
    translateBoundary:(p0:UnitValue, p1:UnitValue)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 number The number of degrees to rotate the object.,
     * @param p1 AnchorPosition The point to rotate about.
     */
    rotate:(p0:number, p1:AnchorPosition)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 number The rotation angle (in degrees),
     * @param p1 AnchorPosition The point to rotate about.
     */
    rotateBoundary:(p0:number, p1:AnchorPosition)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 number The amount to scale the selection horizontally (as a percentage).,
     * @param p1 number The amount to scale the selection vertically (as a percentage).,
     * @param p2 AnchorPosition The point to scale around.
     */
    resize:(p0:number, p1:number, p2:AnchorPosition)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 number The amount to scale the object horizontally (as a percentage).,
     * @param p1 number The amount to scale the object vertically (as a percentage).,
     * @param p2 AnchorPosition The point to scale around.
     */
    resizeBoundary:(p0:number, p1:number, p2:AnchorPosition)=> void;

    /**
     * The selected area of the document or layer.
     * @param p0 number The tolerance in pixels.
     */
    makeWorkPath:(p0:number)=> void;
}

/**
 A group of layer objects, which can include art layer objects and other (nested) layer set objects. A single command or set of commands manipulates all layers in a layer set object.
 */
declare class LayerSet extends Layer {
    parent:LayerSet|Document;				//A group of layer objects, which can include art layer objects and other (nested) layer set objects. A single command or set of commands manipulates all layers in a layer set object.
    typename:string;				//A group of layer objects, which can include art layer objects and other (nested) layer set objects. A single command or set of commands manipulates all layers in a layer set object.
    enabledChannels:Channel;				//A group of layer objects, which can include art layer objects and other (nested) layer set objects. A single command or set of commands manipulates all layers in a layer set object.
    layers:Layers;				//A group of layer objects, which can include art layer objects and other (nested) layer set objects. A single command or set of commands manipulates all layers in a layer set object.
    layerSets:LayerSets;				//A group of layer objects, which can include art layer objects and other (nested) layer set objects. A single command or set of commands manipulates all layers in a layer set object.
    artLayers:ArtLayers;				//A group of layer objects, which can include art layer objects and other (nested) layer set objects. A single command or set of commands manipulates all layers in a layer set object.


    /**
     * A group of layer objects, which can include art layer objects and other (nested) layer set objects. A single command or set of commands manipulates all layers in a layer set object.
     */
    add:()=> LayerSet;

    /**
     * A group of layer objects, which can include art layer objects and other (nested) layer set objects. A single command or set of commands manipulates all layers in a layer set object.
     */
    merge:()=> ArtLayer;
}

/**
 An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
 */
declare class ArtLayer extends Layer {
    parent:LayerSet|Document;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    typename:string;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    fillOpacity:number;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    layerMaskDensity:number;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    layerMaskFeather:number;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    vectorMaskDensity:number;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    vectorMaskFeather:number;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    filterMaskDensity:number;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    filterMaskFeather:number;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    grouped:boolean;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    isBackgroundLayer:boolean;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    pixelsLocked:boolean;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    positionLocked:boolean;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    transparentPixelsLocked:boolean;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    kind:LayerKind;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
    textItem:TextItem;				//An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).


    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    add:()=> ArtLayer;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 string The layer style to apply.
     */
    applyStyle:(p0:string)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    clear:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 boolean If true, the copy includes all visible layers. If false, the copy only copies from the current layer.
     */
    copy:(p0:boolean)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    cut:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    merge:()=> ArtLayer;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 RasterizeType What to rasterize.
     */
    rasterize:(p0:RasterizeType)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    applyAverage:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The blur width in pixels. Range: 1.0 to 250.0.
     */
    applyGaussianBlur:(p0:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 DepthMapSource The source for the depth map.,
     * @param p1 number The blur focal distance (in pixels) for the depth map. RangeL 0 to 255. Valid only when 'source' is transparency or layer mask.,
     * @param p2 boolean If true, inverts the depth map.,
     * @param p3 Geometry The shape of the iris.,
     * @param p4 number The radius of the iris. Range: 0 to 100.,
     * @param p5 number The blade curvature of the iris. Range: 0 to 100.,
     * @param p6 number The rotation of the iris (in degrees). Range: 0 to 360.,
     * @param p7 number The brightness for the specular highlights. Range: 0 to 100.,
     * @param p8 number The threshold for the specular highlights. Range: 0 to 255.,
     * @param p9 number The amount of noise. Range: 0 to 100.,
     * @param p10 NoiseDistribution The distribution value for the noise.,
     * @param p11 boolean If true, the noise is monochromatic.
     */
    applyLensBlur:(p0:DepthMapSource, p1:number, p2:boolean, p3:Geometry, p4:number, p5:number, p6:number, p7:number, p8:number, p9:number, p10:NoiseDistribution, p11:boolean)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    applyBlur:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    applyBlurMore:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The angle (in degrees). Range: -360 to 360.,
     * @param p1 number The radius (in pixels). Range: 1 to 999.
     */
    applyMotionBlur:(p0:number, p1:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The amount of blur. Range: 1 to 100.,
     * @param p1 RadialBlurMethod The blur method to use.,
     * @param p2 RadialBlurQuality The smoothness or graininess of the blurred image.
     */
    applyRadialBlur:(p0:number, p1:RadialBlurMethod, p2:RadialBlurQuality)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The blur radius. Range: 0 - 1000.,
     * @param p1 number The blur threshold. Range: 0 - 1000.,
     * @param p2 SmartBlurQuality The smoothness or graininess of the blurred image.,
     * @param p3 SmartBlurMode The smart blur mode.
     */
    applySmartBlur:(p0:number, p1:number, p2:SmartBlurQuality, p3:SmartBlurMode)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The amount of graininess. Range: 0 to 10.,
     * @param p1 number The glow amount. Range: 0 to 20.,
     * @param p2 number The clear amount. Range: 0 to 20.
     */
    applyDiffuseGlow:(p0:number, p1:number, p2:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The amount of horizontal distortion. Range: -999 to 999.,
     * @param p1 number The amount of vertical distortion. Range: -999 to 999.,
     * @param p2 DisplacementMapType The displacement type.,
     * @param p3 UndefinedAreas The treatment of undistorted areas.,
     * @param p4 File The distortion image map.
     */
    applyDisplace:(p0:number, p1:number, p2:DisplacementMapType, p3:UndefinedAreas, p4:File)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The amount of distortion. Range: 0 to 20.,
     * @param p1 number The smoothness. Range: 1 to 15.,
     * @param p2 number The amount of scaling. Range: 50 to 200.,
     * @param p3 boolean If true, the texture is inverted.,
     * @param p4 TextureType The type of texture.,
     * @param p5 File The file from which to load the texture type.
     */
    applyGlassEffect:(p0:number, p1:number, p2:number, p3:boolean, p4:TextureType, p5:File)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The ripple size. Range: 1 to 15.,
     * @param p1 number The ripple magnitude. Range: 0 to 20.
     */
    applyOceanRipple:(p0:number, p1:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The pinch amount. Range: -100 to 100.
     */
    applyPinch:(p0:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 PolarConversionType The conversion type.
     */
    applyPolarCoordinates:(p0:PolarConversionType)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The ripple amount. Range: -999 to 999.,
     * @param p1 RippleSize The ripple size.
     */
    applyRipple:(p0:number, p1:RippleSize)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 any Specification of the shear curve in points as x,y coordinate pairs in the format [[x1, y1],[x2, y2]]. Any number of coordinate pairs can be specified.,
     * @param p1 UndefinedAreas The treatment of areas left blank by the distortion.
     */
    applyShear:(p0:any, p1:UndefinedAreas)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The amount of distortion. Range: -100 to 100.,
     * @param p1 SpherizeMode The distortion mode.
     */
    applySpherize:(p0:number, p1:SpherizeMode)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The twirl angle. Range: -999 to 999.
     */
    applyTwirl:(p0:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The number of generators. Range: 1 to 999.,
     * @param p1 number The minimum wave length. Range: 1 to 998.,
     * @param p2 number The maximum wave length. Range: 2 to (minimum wavelength + 1),
     * @param p3 number The minimum amplitude. Range: 1 to 998.,
     * @param p4 number The maximum amplitude. Range: 2 to (minimum amplitude + 1),
     * @param p5 number The amount of horizontal scale (as a percentage). Range: 1 to 100.,
     * @param p6 number The amount of vertical scale (as a percentage). Range: 1 to 100.,
     * @param p7 WaveType The wave type.,
     * @param p8 UndefinedAreas The treatment of areas left blank by the distortion.,
     * @param p9 number The random seed.
     */
    applyWave:(p0:number, p1:number, p2:number, p3:number, p4:number, p5:number, p6:number, p7:WaveType, p8:UndefinedAreas, p9:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The amount of zigzag. Range: -100 to 100.,
     * @param p1 number The ridge length.,
     * @param p2 ZigZagType The zigzag style.
     */
    applyZigZag:(p0:number, p1:number, p2:ZigZagType)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The amount of noise (as a percentage). Range: 0.1 to 400.0.,
     * @param p1 NoiseDistribution The noise distribution type.,
     * @param p2 boolean If true, applies the filter only to the tonal elements in the image without changing the colors.
     */
    applyAddNoise:(p0:number, p1:NoiseDistribution, p2:boolean)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    applyDespeckle:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The size (in pixels) of the area searched for dissimilar pixels. Range: 1 to 16.,
     * @param p1 number Determines how dissimilar the pixels should be before they are eliminated. Range: 0 to 255.
     */
    applyDustAndScratches:(p0:number, p1:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The size of the area searched for pixels of similar brightness. Range: 0 to 100.
     */
    applyMedianNoise:(p0:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    applyClouds:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    applyDifferenceClouds:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The flare brightness. Range: 10 to 300.,
     * @param p1 UnitPoint The position of the flare center.,
     * @param p2 LensType The lens type.
     */
    applyLensFlare:(p0:number, p1:UnitPoint, p2:LensType)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 File The texture file. Must be a grayscale Photoshop file.
     */
    applyTextureFill:(p0:File)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    applySharpen:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    applySharpenEdges:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    applySharpenMore:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The amount of sharpening (as a percentage). Range: 1 to 500.,
     * @param p1 number The radius in pixels. Range: 0.1 to 250.0.,
     * @param p2 number The contrast threshold. Range: 0 to 255.
     */
    applyUnSharpMask:(p0:number, p1:number, p2:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 EliminateFields The fields to eliminate.,
     * @param p1 CreateFields The method to use to replace eliminated fields.
     */
    applyDeInterlace:(p0:EliminateFields, p1:CreateFields)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    applyNTSC:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The custom filter characteristics. This is an array of 25 values that corresponds to a left-to-right, top-to- bottom traversal of the array presented in the Custom dialog in the user interface (Filter > Other > Custom).,
     * @param p1 number The value by which to divide the sum of the brightness values of the pixels included in the calculation.,
     * @param p2 number The value to be added to the result of the scale calculation.
     */
    applyCustomFilter:(p0:number, p1:number, p2:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The width (in pixels) of the radius where edge details are retained.
     */
    applyHighPass:(p0:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The choke area (in pixels). Range: 0 to 100.
     */
    applyMaximum:(p0:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The spread area (in pixels). Range: 0 to 100.
     */
    applyMinimum:(p0:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 UnitValue The amount (in pixels) to move the selection horizontally (to the right). Range: -6144 to 6144.,
     * @param p1 UnitValue The amount (in pixels) to move the selection vertically (downward). Range: -6144 to 6144.,
     * @param p2 OffsetUndefinedAreas The method for filling areas left blank by the offset.
     */
    applyOffset:(p0:UnitValue, p1:UnitValue, p2:OffsetUndefinedAreas)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The input levels minimum. Range: 0 to 253.,
     * @param p1 number The input levels maximum. Range: (input range start + 2) to 253.,
     * @param p2 number The input levels gamma. Range: 0.10 to 9.99.,
     * @param p3 number The output levels minimum. Range: 0 to 253.,
     * @param p4 number The output levels maximum. Range: (output range start + 2) to 253.
     */
    adjustLevels:(p0:number, p1:number, p2:number, p3:number, p4:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    autoLevels:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    autoContrast:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 Point The curve points. The number of points must be between 2 and 14.
     */
    adjustCurves:(p0:Point)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The brightness amount. Range: -100 to 100.,
     * @param p1 number The contrast amount. Range: -100 to 100.
     */
    adjustBrightnessContrast:(p0:number, p1:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The adjustments for the shadows. The array must include three values (in the range -100 to 100), which represent cyan or red, magenta or green, and yellow or blue, when the document mode is CMYK or RGB.,
     * @param p1 number The adjustments for the midtones. The array must include three values (in the range -100 to 100), which represent cyan or red, magenta or green, and yellow or blue, when the document mode is CMYK or RGB.,
     * @param p2 number The adjustments for the highlights. The array must include three values (in the range -100 to 100), which represent cyan or red, magenta or green, and yellow or blue, when the document mode is CMYK or RGB.,
     * @param p3 boolean If true, luminosity is preserved.
     */
    adjustColorBalance:(p0:number, p1:number, p2:number, p3:boolean)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    desaturate:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 AdjustmentReference Modifies the amount of a process color in a specified primary color without affecting the other primary colors.,
     * @param p1 number Array of 4 values: cyan, magenta, yellow, black.,
     * @param p2 number Array of 4 values: cyan, magenta, yellow, black.,
     * @param p3 number Array of 4 values: cyan, magenta, yellow, black.,
     * @param p4 number Array of 4 values: cyan, magenta, yellow, black.,
     * @param p5 number Array of 4 values: cyan, magenta, yellow, black.,
     * @param p6 number Array of 4 values: cyan, magenta, yellow, black.,
     * @param p7 number Array of 4 values: cyan, magenta, yellow, black.,
     * @param p8 number Array of 4 values: cyan, magenta, yellow, black.,
     * @param p9 number Array of 4 values: cyan, magenta, yellow, black.
     */
    selectiveColor:(p0:AdjustmentReference, p1:number, p2:number, p3:number, p4:number, p5:number, p6:number, p7:number, p8:number, p9:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 any A list of channel specifications. For each component channel that the document has, you must specify a list of adjustment values followed by a 'constant' value.,
     * @param p1 boolean If true, uses monochrome mixing. Note: If this is true, you can only specify one channel value.
     */
    mixChannels:(p0:any, p1:boolean)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    invert:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     */
    equalize:()=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The threshold level.
     */
    threshold:(p0:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The tonal levels. Range: 2 to 255.
     */
    posterize:(p0:number)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 SolidColor The color to use for the fill.,
     * @param p1 number The density (as a percentage) of the filter effect. Range: 1 to 100.,
     * @param p2 boolean If true, luminosity is preserved.
     */
    photoFilter:(p0:SolidColor, p1:number, p2:boolean)=> void;

    /**
     * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
     * @param p0 number The shadow amount, as a percentage. Range: 0 to 100.,
     * @param p1 number The shadow width, as a percentage. Range: 0 to 100 for tonal width (0 = narrow), (100 = broad).,
     * @param p2 number The shadow radius (in pixels). Range: 0 to 2500.,
     * @param p3 number The highlight amount, as a percentage. Range: 0 to 100.,
     * @param p4 number The highlight width. Range: 0 to 100 for tonal width (0 = narrow), (100 = broad).,
     * @param p5 number The highlight radius (in pixels). Range: 0 to 2500.,
     * @param p6 number The amount to adjust the colors in the changed portion of the image. Range: -100 to 100.,
     * @param p7 number The amount of midtone contrast. Range: -100 to 100.,
     * @param p8 number Fractions of whites to be clipped. Range: 0.000 to 50.000.,
     * @param p9 number Fractions of blacks to be clipped. Range: 0.000 to 50.000.
     */
    shadowHighlight:(p0:number, p1:number, p2:number, p3:number, p4:number, p5:number, p6:number, p7:number, p8:number, p9:number)=> void;
}

/**
 A layer object.
 */
declare class Layer {
    parent:LayerSet|Document;				//A layer object.
    typename:string;				//A layer object.
    name:string;				//A layer object.
    allLocked:boolean;				//A layer object.
    blendMode:BlendMode;				//A layer object.
    linkedLayers:Array<Layer>;				//A layer object.
    opacity:number;				//A layer object.
    visible:boolean;				//A layer object.
    id:number;				//A layer object.
    itemIndex:number;				//A layer object.
    bounds:UnitRect;				//A layer object.
    boundsNoEffects:UnitRect;				//A layer object.
    xmpMetadata:XMPMetadata;				//A layer object.


    /**
     * A layer object.
     * @param p0 Object undefined,
     * @param p1 ElementPlacement undefined
     */
    move:(p0:Object, p1:ElementPlacement)=> Layer;

    /**
     * A layer object.
     * @param p0 Object undefined,
     * @param p1 ElementPlacement undefined
     */
    duplicate:(p0:Object, p1:ElementPlacement)=> Layer;

    /**
     * A layer object.
     * @param p0 LayerSet undefined
     */
    moveToEnd:(p0:LayerSet)=> void;

    /**
     * A layer object.
     */
    remove:()=> void;

    /**
     * A layer object.
     */
    removeAll:()=> void;

    /**
     * A layer object.
     */
    unlink:()=> void;

    /**
     * A layer object.
     * @param p0 Layer The layer to link to.
     */
    link:(p0:Layer)=> void;

    /**
     * A layer object.
     * @param p0 UnitValue The amount to move the object horizontally.,
     * @param p1 UnitValue The amount to move the object vertically.
     */
    translate:(p0:UnitValue, p1:UnitValue)=> void;

    /**
     * A layer object.
     * @param p0 number The number of degrees to rotate the object.,
     * @param p1 AnchorPosition The point to rotate about.
     */
    rotate:(p0:number, p1:AnchorPosition)=> void;

    /**
     * A layer object.
     * @param p0 number The amount to scale the object horizontally (as a percentage).,
     * @param p1 number The amount to scale the object vertically (as a percentage).,
     * @param p2 AnchorPosition The point to resize about.
     */
    resize:(p0:number, p1:number, p2:AnchorPosition)=> void;
}

/**
 Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
 */
declare class Channel {
    parent:Object;				//Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
    typename:string;				//Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
    histogram:number;				//Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
    name:string;				//Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
    kind:ChannelType;				//Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
    opacity:number;				//Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
    visible:boolean;				//Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
    color:SolidColor;				//Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.


    /**
     * Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
     */
    add:()=> Channel;

    /**
     * Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
     * @param p0 Object undefined,
     * @param p1 ElementPlacement undefined
     */
    duplicate:(p0:Object, p1:ElementPlacement)=> Channel;

    /**
     * Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
     */
    remove:()=> void;

    /**
     * Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
     */
    removeAll:()=> void;

    /**
     * Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
     */
    merge:()=> void;

    /**
     * Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
     * @param p0 Document The document to duplicate the channel to.
     */
    // duplicate: (p0: Document)=> Channel;
}

/**
 A guide in the document.
 */
declare class Guide {
    parent:Object;				//A guide in the document.
    typename:string;				//A guide in the document.
    direction:Direction;				//A guide in the document.
    coordinate:UnitValue;				//A guide in the document.


    /**
     * A guide in the document.
     */
    remove:()=> void;

    /**
     * A guide in the document.
     */
    removeAll:()=> void;
}

/**
 A version of the document stored automatically (and added to the history states collection, which preserves the document state each time the document is changed).
 */
declare class HistoryState {
    parent:Object;				//A version of the document stored automatically (and added to the history states collection, which preserves the document state each time the document is changed).
    typename:string;				//A version of the document stored automatically (and added to the history states collection, which preserves the document state each time the document is changed).
    name:string;				//A version of the document stored automatically (and added to the history states collection, which preserves the document state each time the document is changed).
    snapshot:boolean;				//A version of the document stored automatically (and added to the history states collection, which preserves the document state each time the document is changed).

}

/**
 An installed font.
 */
declare class TextFont {
    parent:Object;				//An installed font.
    typename:string;				//An installed font.
    name:string;				//An installed font.
    postScriptName:string;				//An installed font.
    family:string;				//An installed font.
    style:string;				//An installed font.

}

/**
 The text object contained in an art layer.
 */
declare class TextItem {
    parent:Object;				//The text object contained in an art layer.
    typename:string;				//The text object contained in an art layer.
    antiAliasMethod:AntiAlias;				//The text object contained in an art layer.
    autoKerning:AutoKernType;				//The text object contained in an art layer.
    color:SolidColor;				//The text object contained in an art layer.
    useAutoLeading:boolean;				//The text object contained in an art layer.
    tracking:number;				//The text object contained in an art layer.
    verticalScale:number;				//The text object contained in an art layer.
    horizontalScale:number;				//The text object contained in an art layer.
    baselineShift:UnitValue;				//The text object contained in an art layer.
    contents:string;				//The text object contained in an art layer.
    font:string;				//The text object contained in an art layer.
    leading:UnitValue;				//The text object contained in an art layer.
    ligatures:boolean;				//The text object contained in an art layer.
    alternateLigatures:boolean;				//The text object contained in an art layer.
    oldStyle:boolean;				//The text object contained in an art layer.
    position:UnitPoint;				//The text object contained in an art layer.
    direction:Direction;				//The text object contained in an art layer.
    size:number;				//The text object contained in an art layer.
    fauxBold:boolean;				//The text object contained in an art layer.
    fauxItalic:boolean;				//The text object contained in an art layer.
    capitalization:Case;				//The text object contained in an art layer.
    strikeThru:StrikeThruType;				//The text object contained in an art layer.
    underline:UnderlineType;				//The text object contained in an art layer.
    language:Language;				//The text object contained in an art layer.
    noBreak:boolean;				//The text object contained in an art layer.
    kind:TextType;				//The text object contained in an art layer.
    justification:Justification;				//The text object contained in an art layer.
    leftIndent:UnitValue;				//The text object contained in an art layer.
    firstLineIndent:UnitValue;				//The text object contained in an art layer.
    rightIndent:UnitValue;				//The text object contained in an art layer.
    spaceBefore:UnitValue;				//The text object contained in an art layer.
    spaceAfter:UnitValue;				//The text object contained in an art layer.
    hangingPuntuation:boolean;				//The text object contained in an art layer.
    textComposer:TextComposer;				//The text object contained in an art layer.
    hyphenation:boolean;				//The text object contained in an art layer.
    minimumGlyphScaling:number;				//The text object contained in an art layer.
    desiredGlyphScaling:number;				//The text object contained in an art layer.
    maximumGlyphScaling:number;				//The text object contained in an art layer.
    minimumLetterScaling:number;				//The text object contained in an art layer.
    desiredLetterScaling:number;				//The text object contained in an art layer.
    maximumLetterScaling:number;				//The text object contained in an art layer.
    minimumWordScaling:number;				//The text object contained in an art layer.
    desiredWordScaling:number;				//The text object contained in an art layer.
    maximumWordScaling:number;				//The text object contained in an art layer.
    autoLeadingAmount:number;				//The text object contained in an art layer.
    hyphenateWordsLongerThan:number;				//The text object contained in an art layer.
    hyphenateAfterFirst:number;				//The text object contained in an art layer.
    hyphenateBeforeLast:number;				//The text object contained in an art layer.
    hyphenLimit:number;				//The text object contained in an art layer.
    hyphenationZone:UnitValue;				//The text object contained in an art layer.
    hyphenateCapitalWords:boolean;				//The text object contained in an art layer.
    width:UnitValue;				//The text object contained in an art layer.
    height:UnitValue;				//The text object contained in an art layer.
    warpStyle:WarpStyle;				//The text object contained in an art layer.
    warpDirection:Direction;				//The text object contained in an art layer.
    warpBend:number;				//The text object contained in an art layer.
    warpHorizontalDistortion:number;				//The text object contained in an art layer.
    warpVerticalDistortion:number;				//The text object contained in an art layer.


    /**
     * The text object contained in an art layer.
     */
    createPath:()=> void;

    /**
     * The text object contained in an art layer.
     */
    convertToShape:()=> void;
}

/**
 A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
 */
declare class LayerComp {
    parent:Object;				//A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
    typename:string;				//A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
    name:string;				//A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
    comment:any;				//A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
    appearance:boolean;				//A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
    position:boolean;				//A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
    visibility:boolean;				//A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
    selected:boolean;				//A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).


    /**
     * A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
     */
    add:()=> LayerComp;

    /**
     * A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
     */
    remove:()=> void;

    /**
     * A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
     */
    removeAll:()=> void;

    /**
     * A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
     */
    apply:()=> void;

    /**
     * A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
     */
    recapture:()=> void;

    /**
     * A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
     */
    resetFromComp:()=> void;
}

/**
 A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
 */
declare class PathItem {
    parent:Object;				//A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
    typename:string;				//A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
    name:string;				//A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
    subPathItems:SubPathItems;				//A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
    kind:PathKind;				//A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.


    /**
     * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
     */
    add:()=> PathItem;

    /**
     * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
     * @param p0 Object undefined,
     * @param p1 ElementPlacement undefined
     */
    duplicate:(p0:Object, p1:ElementPlacement)=> PathItem;

    /**
     * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
     */
    remove:()=> void;

    /**
     * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
     */
    removeAll:()=> void;

    /**
     * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
     * @param p0 string The name for the new path.
     */
    // duplicate: (p0: string)=> PathItem;

    /**
     * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
     * @param p0 number The feather amount in pixels. Range: 0.0 to 250.0.,
     * @param p1 boolean If true, the selection uses anti-aliasing.,
     * @param p2 SelectionType The selection behavior relative to the existing selection (when a selection already exists).
     */
    makeSelection:(p0:number, p1:boolean, p2:SelectionType)=> void;

    /**
     * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
     * @param p0 any The color of the fill for this path.,
     * @param p1 ColorBlendMode The blending mode of the fill for this path.,
     * @param p2 number The opacity of the fill for this path (as a percentage). Range: 0.0 to 100.0.,
     * @param p3 boolean If true, transparency is preserved.,
     * @param p4 number The feather amount in pixels. Range: 0.0 to 250.0.,
     * @param p5 boolean If true, uses anti-aliasing for the selection.,
     * @param p6 boolean If true, uses all subpaths when doing the fill.
     */
    fillPath:(p0:any, p1:ColorBlendMode, p2:number, p3:boolean, p4:number, p5:boolean, p6:boolean)=> void;

    /**
     * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
     * @param p0 ToolType The tool to use when stroking the path.,
     * @param p1 boolean If true, simulates the pressure when using the tool.
     */
    strokePath:(p0:ToolType, p1:boolean)=> void;

    /**
     * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
     * @param p0 number Flatness in device pixels; tells the PostScript printer how to approximate curves. Range: 0.2 to 100).
     */
    makeClippingPath:(p0:number)=> void;

    /**
     * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
     */
    select:()=> void;

    /**
     * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
     */
    deselect:()=> void;
}

/**
 Information about a path. You do not use the sub path item object to create a path. Rather, you create path segments using the sub path info object. Use the sub path item object to retrieve information about a path. All properties are read-only.
 */
declare class SubPathItem {
    parent:Object;				//Information about a path. You do not use the sub path item object to create a path. Rather, you create path segments using the sub path info object. Use the sub path item object to retrieve information about a path. All properties are read-only.
    typename:string;				//Information about a path. You do not use the sub path item object to create a path. Rather, you create path segments using the sub path info object. Use the sub path item object to retrieve information about a path. All properties are read-only.
    closed:boolean;				//Information about a path. You do not use the sub path item object to create a path. Rather, you create path segments using the sub path info object. Use the sub path item object to retrieve information about a path. All properties are read-only.
    operation:ShapeOperation;				//Information about a path. You do not use the sub path item object to create a path. Rather, you create path segments using the sub path info object. Use the sub path item object to retrieve information about a path. All properties are read-only.
    pathPoints:PathPoints;				//Information about a path. You do not use the sub path item object to create a path. Rather, you create path segments using the sub path info object. Use the sub path item object to retrieve information about a path. All properties are read-only.

}

/**
 Information about an array of path point info objects. You do not use the path point object to create points that make up a path. Rather, you use the path point object to retrieve information about the points that describe path segments. To create path points, use the path point info object.
 */
declare class PathPoint {
    parent:Object;				//Information about an array of path point info objects. You do not use the path point object to create points that make up a path. Rather, you use the path point object to retrieve information about the points that describe path segments. To create path points, use the path point info object.
    typename:string;				//Information about an array of path point info objects. You do not use the path point object to create points that make up a path. Rather, you use the path point object to retrieve information about the points that describe path segments. To create path points, use the path point info object.
    anchor:Point;				//Information about an array of path point info objects. You do not use the path point object to create points that make up a path. Rather, you use the path point object to retrieve information about the points that describe path segments. To create path points, use the path point info object.
    leftDirection:Point;				//Information about an array of path point info objects. You do not use the path point object to create points that make up a path. Rather, you use the path point object to retrieve information about the points that describe path segments. To create path points, use the path point info object.
    rightDirection:Point;				//Information about an array of path point info objects. You do not use the path point object to create points that make up a path. Rather, you use the path point object to retrieve information about the points that describe path segments. To create path points, use the path point info object.
    kind:PointKind;				//Information about an array of path point info objects. You do not use the path point object to create points that make up a path. Rather, you use the path point object to retrieve information about the points that describe path segments. To create path points, use the path point info object.

}

/**
 The log of measurements taken.
 */
declare class MeasurementLog {
    parent:Object;				//The log of measurements taken.
    typename:string;				//The log of measurements taken.


    /**
     * The log of measurements taken.
     * @param p0 File The file to to. If not specified, a 'file save' dialog is displayed.,
     * @param p1 MeasurementRange The measurements to exporter. Default: selected.,
     * @param p2 string An array of identifiers of data points to exporter. The order of the data points is respected in the exported file. Defaults to data points visible in Measurement Log palette.
     */
    exportMeasurements:(p0:File, p1:MeasurementRange, p2:string)=> void;

    /**
     * The log of measurements taken.
     * @param p0 MeasurementRange The measurements to delete. Default: selected.
     */
    deleteMeasurements:(p0:MeasurementRange)=> void;
}

/**
 The measurement scale for the document.
 */
declare class MeasurementScale {
    parent:Object;				//The measurement scale for the document.
    typename:string;				//The measurement scale for the document.
    name:string;				//The measurement scale for the document.
    pixelLength:number;				//The measurement scale for the document.
    logicalLength:number;				//The measurement scale for the document.
    logicalUnits:string;				//The measurement scale for the document.

}

/**
 An event-handler object that tells the script to execute specified code when a specified event occurs. For notifiers to work, they must be enabled. See the 'notifiers enabled' property of the Application object. Events that occur within scripts do not generally trigger notifiers, because they occur inside of a "play script" event.
 */
declare class Notifier {
    parent:Object;				//An event-handler object that tells the script to execute specified code when a specified event occurs. For notifiers to work, they must be enabled. See the 'notifiers enabled' property of the Application object. Events that occur within scripts do not generally trigger notifiers, because they occur inside of a "play script" event.
    typename:string;				//An event-handler object that tells the script to execute specified code when a specified event occurs. For notifiers to work, they must be enabled. See the 'notifiers enabled' property of the Application object. Events that occur within scripts do not generally trigger notifiers, because they occur inside of a "play script" event.
    event:string;				//An event-handler object that tells the script to execute specified code when a specified event occurs. For notifiers to work, they must be enabled. See the 'notifiers enabled' property of the Application object. Events that occur within scripts do not generally trigger notifiers, because they occur inside of a "play script" event.
    eventFile:File;				//An event-handler object that tells the script to execute specified code when a specified event occurs. For notifiers to work, they must be enabled. See the 'notifiers enabled' property of the Application object. Events that occur within scripts do not generally trigger notifiers, because they occur inside of a "play script" event.
    eventClass:string;				//An event-handler object that tells the script to execute specified code when a specified event occurs. For notifiers to work, they must be enabled. See the 'notifiers enabled' property of the Application object. Events that occur within scripts do not generally trigger notifiers, because they occur inside of a "play script" event.


    /**
     * An event-handler object that tells the script to execute specified code when a specified event occurs. For notifiers to work, they must be enabled. See the 'notifiers enabled' property of the Application object. Events that occur within scripts do not generally trigger notifiers, because they occur inside of a "play script" event.
     */
    remove:()=> void;

    /**
     * An event-handler object that tells the script to execute specified code when a specified event occurs. For notifiers to work, they must be enabled. See the 'notifiers enabled' property of the Application object. Events that occur within scripts do not generally trigger notifiers, because they occur inside of a "play script" event.
     */
    removeAll:()=> void;
}

/**
 A counted item in the document. The count item feature is available in the Extended Version only.
 */
declare class CountItem {
    parent:Object;				//A counted item in the document. The count item feature is available in the Extended Version only.
    typename:string;				//A counted item in the document. The count item feature is available in the Extended Version only.
    position:UnitPoint;				//A counted item in the document. The count item feature is available in the Extended Version only.


    /**
     * A counted item in the document. The count item feature is available in the Extended Version only.
     */
    add:()=> CountItem;

    /**
     * A counted item in the document. The count item feature is available in the Extended Version only.
     */
    remove:()=> void;

    /**
     * A counted item in the document. The count item feature is available in the Extended Version only.
     */
    removeAll:()=> void;
}

/**
 A color sampler in a document.
 */
declare class ColorSampler {
    parent:Object;				//A color sampler in a document.
    typename:string;				//A color sampler in a document.
    position:UnitPoint;				//A color sampler in a document.
    color:SolidColor;				//A color sampler in a document.


    /**
     * A color sampler in a document.
     */
    add:()=> ColorSampler;

    /**
     * A color sampler in a document.
     */
    remove:()=> void;

    /**
     * A color sampler in a document.
     */
    removeAll:()=> void;

    /**
     * A color sampler in a document.
     * @param p0 UnitPoint Position of destination (unit value)
     */
    move:(p0:UnitPoint)=> void;
}

/**
 Camera raw image file settings stored in an XMP file in the same folder as the raw file with the same base name and an XMP extension.
 */
declare class XMPMetadata {
    parent:Object;				//Camera raw image file settings stored in an XMP file in the same folder as the raw file with the same base name and an XMP extension.
    typename:string;				//Camera raw image file settings stored in an XMP file in the same folder as the raw file with the same base name and an XMP extension.
    rawData:string;				//Camera raw image file settings stored in an XMP file in the same folder as the raw file with the same base name and an XMP extension.

}

/**
 Describes a point. This class is also a two-element collection.
 */
declare class Point {
    x:number;				//Describes a point. This class is also a two-element collection.
    y:number;				//Describes a point. This class is also a two-element collection.
    left:number;				//Describes a point. This class is also a two-element collection.
    top:number;				//Describes a point. This class is also a two-element collection.
    length:number;				//Describes a point. This class is also a two-element collection.

}

/**
 Describes a rectangle. This class is also a four-element collection.
 */
declare class Rectangle {
    x:number;				//Describes a rectangle. This class is also a four-element collection.
    y:number;				//Describes a rectangle. This class is also a four-element collection.
    width:number;				//Describes a rectangle. This class is also a four-element collection.
    height:number;				//Describes a rectangle. This class is also a four-element collection.
    left:number;				//Describes a rectangle. This class is also a four-element collection.
    right:number;				//Describes a rectangle. This class is also a four-element collection.
    top:number;				//Describes a rectangle. This class is also a four-element collection.
    bottom:number;				//Describes a rectangle. This class is also a four-element collection.
    length:number;				//Describes a rectangle. This class is also a four-element collection.

}

/**
 Controls where Photoshop places an element.
 */
declare enum ElementPlacement {
    PLACEAFTER = 1,
    PLACEBEFORE = 2,
    PLACEATEND = 3,
    INSIDE = 4,

}
declare class UnitPoint {
}

declare class AliasArray {
}
declare class FileArray {
}

// type UnitRect = [UnitValue,UnitValue,UnitValue,UnitValue];
declare class PrintEncoding {
}
declare var app:Application;

declare interface File{
    open(p0:string);
    close();
    encoding:string;
    write(p0:string);
}
declare var activeDocument:Document;
declare class Dither {
    static DIFFUSION:DitherType
}
declare class Extension{
    static LOWERCASE:MacExtensionType
}